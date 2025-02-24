from django.contrib.auth import authenticate, login
from django.views import View
from django.shortcuts import render, redirect
from django.http import HttpResponse

from users.forms import UserCreationForm
from news.models import News


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
        return render(request, self.template_name, {'user': request.user})

def home(request):
    latest_news = News.objects.order_by('-created_at')[:3]
    return render(request, 'home.html', {'latest_news': latest_news})

# Новый обработчик для /game
def game_view(request):
    return render(request, 'invo/index.html')