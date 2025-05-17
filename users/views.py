from django.contrib.auth import authenticate, login
from django.views import View
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import ListView

from users.forms import UserCreationForm
from news.models import News

from django.contrib.auth.decorators import login_required
from .forms import TournamentForm, TeamForm, ParticipantForm, ProfileUpdateForm

from .models import Team, Participant, Tournament, ProfileFrame

from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from django.contrib import messages

from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

from collections import defaultdict
from .models import Match
from .utils   import generate_first_round

from django.core.mail import send_mail
from django.conf import settings

User = get_user_model()

POINTS_FOR_TOURNAMENT_CREATION = 25
POINTS_FOR_TEAM_CREATION = 10

class Register(View):
    template_name = 'registration/register.html'

    def get(self, request):
        context = {
            'form': UserCreationForm()
        }
        return render(request, self.template_name, context)

    def post(self, request):
        form = UserCreationForm(request.POST)

        if form.is_valid():
            form.save()
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password1')
            user = authenticate(email=email, password=password)
            login(request, user)
            return redirect('home')
        context = {
            'form': form
        }
        return render(request, self.template_name, context)


class ProfileView(View):
    template_name = 'profile.html'

    def get(self, request):
        user = request.user
        tournaments = Tournament.objects.filter(creator=user)
        return render(request, self.template_name, {
            'user': user,
            'tournaments': tournaments
        })

def home(request):
    latest_news = News.objects.order_by('-created_at')[:2]
    highlighted_news = News.objects.order_by('-created_at')[:2]
    
    return render(request, 'home.html', {
        'latest_news': latest_news,
        'highlighted_news': highlighted_news,
    })

# Новый обработчик для /game
@login_required
def game_view(request):
    return render(request, 'invo/index.html')

def how_it_works_view(request):
    return render(request, 'how_it_works_page.html')

@login_required
def create_tournament(request):
    if request.method == 'POST':
        form = TournamentForm(request.POST)
        if form.is_valid():
            tournament = form.save(commit=False)
            tournament.creator = request.user
            tournament.save()

            # Начисляем баллы
            request.user.points += POINTS_FOR_TOURNAMENT_CREATION
            request.user.save()

            return redirect('tournament_list')  # или на страницу турнира
    else:
        form = TournamentForm()
    return render(request, 'tournaments/create_tournament.html', {'form': form})

@login_required
def create_team(request):
    if request.method == 'POST':
        form = TeamForm(request.POST, request.FILES)
        if form.is_valid():
            team = form.save(commit=False)
            tournament = team.tournament

            # проверка на лимит команд
            if tournament.teams.count() >= tournament.max_teams:
                form.add_error('tournament', 'В этом турнире уже достигнуто максимальное количество команд.')
            else:
                team.creator = request.user
                team.save()

                # Начисляем баллы
                request.user.points += POINTS_FOR_TEAM_CREATION
                request.user.save()

                # ───── УВЕДОМЛЕНИЕ СОЗДАТЕЛЮ ТУРНИРА ─────
                subject = f"Новая команда зарегистрирована в турнире: {tournament.name}"
                message = (
                    f"Привет, {tournament.creator.username}!\n\n"
                    f"Пользователь {request.user.email} только что зарегистрировал команду «{team.name}» "
                    f"для участия в вашем турнире «{tournament.name}».\n\n"
                    f"Количество команд сейчас: {tournament.teams.count()}/{tournament.max_teams}."
                )
                recipient_list = [tournament.creator.email]

                send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list)

                return redirect('tournament_list')
    else:
        form = TeamForm()
    return render(request, 'tournaments/create_team.html', {'form': form})

@login_required
def create_participant(request):
    if request.method == 'POST':
        form = ParticipantForm(request.POST, user=request.user)
        if form.is_valid():
            participant = form.save(commit=False)
            team = participant.team

            if team.members.count() >= team.tournament.max_team_members:
                form.add_error('team', 'В этой команде уже максимальное количество участников.')
            else:
                # Привязываем к существующему юзеру по email
                user_with_email = User.objects.filter(email=participant.email).first()
                if user_with_email:
                    participant.user = user_with_email

                participant.save()

                # ───── УВЕДОМЛЕНИЕ УЧАСТНИКУ ─────
                subject = f"Вы зарегистрированы в турнире: {team.tournament.name}"
                message = (
                    f"Здравствуйте, {participant.full_name}!\n\n"
                    f"Вы были зарегистрированы в команду «{team.name}» для участия в турнире «{team.tournament.name}».\n\n"
                    f"Организатор турнира: {team.tournament.creator.email}"
                )
                recipient_list = [participant.email]

                send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list)

                return redirect('team_detail', pk=team.pk)
    else:
        form = ParticipantForm(user=request.user)
    return render(request, 'tournaments/create_participant.html', {'form': form})

def tournament_list(request):
    tournaments = Tournament.objects.all()
    return render(request, 'tournaments/tournament_list.html', {'tournaments': tournaments})

def tournament_detail(request, pk):
    tournament = get_object_or_404(Tournament, pk=pk)

    # 1) генерируем первый раунд при необходимости
    if not tournament.matches.exists() and tournament.teams.count() >= 2:
        generate_first_round(tournament)

    # 2) группируем матчи по раундам
    rounds = defaultdict(list)
    for m in tournament.matches.select_related('team1', 'team2', 'winner'):
        rounds[m.round_number].append(m)

    # 3) гарантируем сортировку
    rounds = dict(sorted(rounds.items()))
    for r, lst in rounds.items():
        lst.sort(key=lambda x: x.order_in_round)

    return render(request, 'tournaments/tournament_detail.html', {
        'tournament': tournament,
        'rounds': rounds
    })

@login_required
def team_detail(request, pk):
    team = get_object_or_404(Team, pk=pk)
    is_creator = request.user == team.creator
    can_add = team.can_add_member()
    return render(request, 'tournaments/team_detail.html', {
        'team': team,
        'is_creator': is_creator,
        'can_add': can_add,
    })

@login_required
def profile_frame_shop(request):
    frames = ProfileFrame.objects.all()
    user = request.user

    if request.method == 'POST':
        frame_id = request.POST.get('frame_id')
        frame = get_object_or_404(ProfileFrame, id=frame_id)

        if frame in user.purchased_frames.all():
            messages.error(request, "Вы уже купили эту рамку.")
        elif user.points < frame.price:
            messages.error(request, "Недостаточно баллов для покупки этой рамки.")
        else:
            user.points -= frame.price
            user.purchased_frames.add(frame)
            user.save()
            messages.success(request, f"Вы успешно купили рамку: {frame.name}!")

        return redirect('shop')

    return render(request, 'profile_frame_shop.html', {'frames': frames, 'user': user})

class UsersRatingView(ListView):
    model = User
    template_name = 'users_rating.html'
    context_object_name = 'users'

    def get_queryset(self):
        return User.objects.all().order_by('-points')

@login_required
@require_POST
def save_score(request):
    try:
        data = json.loads(request.body)
        score = int(data.get('score', 0))
        if score > 0:
            request.user.points += score
            request.user.save()
        return JsonResponse({'status': 'ok', 'points': request.user.points})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@login_required
def edit_profile(request):
    if request.method == 'POST':
        form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('profile')  # название твоего url на страницу профиля
    else:
        form = ProfileUpdateForm(instance=request.user)

    return render(request, 'edit_profile.html', {'form': form})