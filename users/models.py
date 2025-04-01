from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from django.core.exceptions import ValidationError

class Game(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name=_('Название игры'))

    class Meta:
        verbose_name = _('Игра')
        verbose_name_plural = _('Игры')

    def __str__(self):
        return self.name


class User(AbstractUser):
    email = models.EmailField(
        _('email address'),
        unique=True,
    )

    # Фото профиля (опциональное)
    profile_picture = models.ImageField(
        upload_to='profile_pictures/',
        blank=True,
        null=True,
        verbose_name=_('Фото профиля')
    )

    # Возраст пользователя
    age = models.PositiveIntegerField(
        blank=True,
        null=True,
        verbose_name=_('Возраст')
    )

    # Город пользователя
    city = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        verbose_name=_('Город')
    )

    # Страна пользователя
    country = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        verbose_name=_('Страна')
    )

    # Ссылка на Steam профиль
    steam_profile = models.URLField(
        blank=True,
        null=True,
        verbose_name=_('Steam профиль')
    )

    # Выбор любимых игр
    favorite_games = models.ManyToManyField(
        Game,
        blank=True,
        verbose_name=_('Любимые игры')
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


User = settings.AUTH_USER_MODEL


class Tournament(models.Model):
    class TournamentType(models.TextChoices):
        TEAM = 'team', _('Командный')
        SOLO = 'solo', _('Одиночный')

    class Discipline(models.TextChoices):
        CS2 = 'CS2', _('CS 2')
        DOTA2 = 'DOTA2', _('DOTA 2')
        LOL = 'LOL', _('League of Legends')
        VALORANT = 'VALORANT', _('Valorant')

    class Format(models.TextChoices):
        PARTICIPANTS = 'participants', _('Только участники')
        GROUP_STAGE_1 = 'group_stage_1', _('Групповой этап 1')
        GROUP_STAGE_2 = 'group_stage_2', _('Групповой этап 2')
        PLAYOFF = 'playoff', _('Плей-офф')

    creator = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_('Создатель'))
    name = models.CharField(max_length=100, verbose_name=_('Название турнира'))
    type = models.CharField(max_length=10, choices=TournamentType.choices, verbose_name=_('Тип турнира'))
    discipline = models.CharField(max_length=20, choices=Discipline.choices, verbose_name=_('Дисциплина'))
    max_teams = models.PositiveIntegerField(verbose_name=_('Максимальное количество команд'))
    max_team_members = models.PositiveIntegerField(verbose_name=_('Максимальное количество участников в команде'))
    format = models.CharField(max_length=30, choices=Format.choices, verbose_name=_('Формат турнира'))
    prize_pool = models.DecimalField(max_digits=10, decimal_places=2, verbose_name=_('Призовой фонд (в $)'))

    def __str__(self):
        return self.name

    def can_add_team(self):
        return self.teams.count() < self.max_teams


class Team(models.Model):
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE, related_name='teams', verbose_name=_('Турнир'))
    creator = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_('Создатель команды'))
    name = models.CharField(max_length=100, verbose_name=_('Название команды'))
    logo = models.ImageField(upload_to='team_logos/', blank=True, null=True, default='default_team_logo.png', verbose_name=_('Логотип'))

    def __str__(self):
        return self.name

    def clean(self):
        if self.tournament.teams.count() >= self.tournament.max_teams:
            raise ValidationError(_('Достигнуто максимальное количество команд в турнире.'))

    def can_add_member(self):
        return self.members.count() < self.tournament.max_team_members


class Participant(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='members', verbose_name=_('Команда'))
    full_name = models.CharField(max_length=255, verbose_name=_('ФИО'))
    nickname = models.CharField(max_length=100, verbose_name=_('Никнейм'))
    email = models.EmailField(verbose_name=_('Email'))
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, verbose_name=_('Пользователь сайта'))

    def __str__(self):
        return f"{self.nickname} ({self.full_name})"

    def clean(self):
        if self.team.members.count() >= self.team.tournament.max_team_members:
            raise ValidationError(_('Достигнуто максимальное количество участников в команде.'))
