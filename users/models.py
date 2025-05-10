from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from django.core.exceptions import ValidationError

class ProfileFrame(models.Model):
    name = models.CharField(max_length=100, verbose_name=_('Название рамки'))
    image = models.ImageField(upload_to='profile_frames/', verbose_name=_('Изображение рамки'))
    price = models.PositiveIntegerField(verbose_name=_('Цена в очках или валюте'))

    class Meta:
        verbose_name = _('Рамка профиля')
        verbose_name_plural = _('Рамки профиля')

    def __str__(self):
        return self.name

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

    points = models.PositiveIntegerField(
        default=0,
        verbose_name=_('Баллы пользователя')
    )

    purchased_frames = models.ManyToManyField('ProfileFrame', blank=True, verbose_name=_('Купленные рамки'))
    selected_frame = models.ForeignKey('ProfileFrame', blank=True, null=True, on_delete=models.SET_NULL, related_name='users_with_frame', verbose_name=_('Выбранная рамка'))

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
        if self.tournament.teams.count() >= self.tournament.max_teams+1:
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

# tournaments/models.py
class Match(models.Model):
    tournament   = models.ForeignKey(
        Tournament, on_delete=models.CASCADE,
        related_name='matches', verbose_name=_('Турнир')
    )
    round_number = models.PositiveIntegerField(verbose_name=_('Раунд'))  # 1 = финал
    order_in_round = models.PositiveIntegerField(verbose_name=_('Порядок в раунде'))

    team1 = models.ForeignKey(
        Team, on_delete=models.SET_NULL, null=True, blank=True,
        related_name='matches_as_team1', verbose_name=_('Команда 1')
    )
    team2 = models.ForeignKey(
        Team, on_delete=models.SET_NULL, null=True, blank=True,
        related_name='matches_as_team2', verbose_name=_('Команда 2')
    )

    score_team1 = models.PositiveIntegerField(default=0, verbose_name=_('Счёт команды 1'))
    score_team2 = models.PositiveIntegerField(default=0, verbose_name=_('Счёт команды 2'))
    winner      = models.ForeignKey(
        Team, on_delete=models.SET_NULL, null=True, blank=True,
        related_name='matches_won', verbose_name=_('Победитель')
    )
    is_finished = models.BooleanField(default=False, verbose_name=_('Матч завершён'))
    scheduled_at = models.DateTimeField(null=True, blank=True, verbose_name=_('Дата/время'))

    class Meta:
        verbose_name = _('Матч')
        verbose_name_plural = _('Матчи')
        unique_together = ('tournament', 'round_number', 'order_in_round')
        ordering = ['round_number', 'order_in_round']

    def set_winner(self):
        """Вызывайте после сохранения счёта."""
        if self.score_team1 == self.score_team2:
            return  # Ничья не допускается
        self.winner = self.team1 if self.score_team1 > self.score_team2 else self.team2
        self.is_finished = True
        self.save(update_fields=['winner', 'is_finished'])
        advance_winner(self)  # создаём/обновляем следующий раунд

def advance_winner(match: 'Match'):
    next_round = match.round_number + 1
    next_order = match.order_in_round // 2

    nxt, created = Match.objects.get_or_create(
        tournament=match.tournament,
        round_number=next_round,
        order_in_round=next_order,
        defaults={'team1': None, 'team2': None},
    )

    if match.order_in_round % 2 == 0:
        nxt.team1 = match.winner
    else:
        nxt.team2 = match.winner
    nxt.save()