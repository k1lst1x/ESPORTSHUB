from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

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
