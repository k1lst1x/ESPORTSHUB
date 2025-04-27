from django.contrib.auth import authenticate, login
from django.views import View
from django.shortcuts import render, redirect
from django.http import HttpResponse

from users.forms import UserCreationForm
from news.models import News

from django.contrib.auth.decorators import login_required
from .forms import TournamentForm, TeamForm, ParticipantForm

from .models import Team, Participant, Tournament, ProfileFrame

from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from django.contrib import messages

User = get_user_model()

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
                return redirect('tournament_list')  # или на страницу турнира/команды
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
                user_with_email = User.objects.filter(email=participant.email).first()
                if user_with_email:
                    participant.user = user_with_email
                participant.save()
                return redirect('tournament_list')
    else:
        form = ParticipantForm(user=request.user)

    return render(request, 'tournaments/create_participant.html', {'form': form})

def tournament_list(request):
    tournaments = Tournament.objects.all()
    return render(request, 'tournaments/tournament_list.html', {'tournaments': tournaments})

def tournament_detail(request, pk):
    tournament = get_object_or_404(Tournament, pk=pk)
    return render(request, 'tournaments/tournament_detail.html', {'tournament': tournament})

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

        return redirect('profile_frame_shop')

    return render(request, 'profile_frame_shop.html', {'frames': frames, 'user': user})