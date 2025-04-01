from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.utils.translation import gettext_lazy as _
from .models import Tournament, Team, Participant

User = get_user_model()


class UserCreationForm(UserCreationForm):
    email = forms.EmailField(
        label=_("Email"),
        max_length=254,
        widget=forms.EmailInput(attrs={'autocomplete': 'email'})
    )

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ("username", "email")

class TournamentForm(forms.ModelForm):
    terms = forms.BooleanField(
        required=True,
        label='Я согласен с условиями использования',
        error_messages={'required': 'Вы должны принять условия использования'}
    )

    class Meta:
        model = Tournament
        fields = [
            'name', 'type', 'discipline', 'max_teams',
            'max_team_members', 'format', 'prize_pool'
        ]
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'type': forms.Select(attrs={'class': 'form-control'}),
            'discipline': forms.Select(attrs={'class': 'form-control'}),
            'max_teams': forms.NumberInput(attrs={'class': 'form-control'}),
            'max_team_members': forms.NumberInput(attrs={'class': 'form-control'}),
            'format': forms.Select(attrs={'class': 'form-control'}),
            'prize_pool': forms.NumberInput(attrs={'class': 'form-control'}),
        }

class TeamForm(forms.ModelForm):
    terms = forms.BooleanField(
        required=True,
        label='',
        error_messages={'required': 'Вы должны принять условия использования'}
    )

    class Meta:
        model = Team
        fields = ['tournament', 'name', 'logo']
        widgets = {
            'tournament': forms.Select(attrs={'class': 'form-control'}),
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'logo': forms.ClearableFileInput(attrs={'class': 'form-control'}),
        }

class ParticipantForm(forms.ModelForm):
    terms = forms.BooleanField(
        required=True,
        label='',
        error_messages={'required': 'Вы должны принять условия использования'}
    )

    class Meta:
        model = Participant
        fields = ['team', 'full_name', 'nickname', 'email']
        widgets = {
            'team': forms.Select(attrs={'class': 'form-control'}),
            'full_name': forms.TextInput(attrs={'class': 'form-control'}),
            'nickname': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
        }
