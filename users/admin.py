from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .models import Game

from users.forms import UserCreationForm

User = get_user_model()


# @admin.register(User)
# class UserAdmin(UserAdmin):
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('username', 'email', 'password1', 'password2'),
#         }),
#     )

#     add_form = UserCreationForm

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    model = User
    add_form = UserCreationForm

    list_display = ('id', 'username', 'email', 'first_name', 'last_name', 'age', 'city', 'country', 'is_staff', 'is_active')
    list_display_links = ('id', 'username')
    list_filter = ('is_staff', 'is_active', 'city', 'country')
    search_fields = ('username', 'email', 'first_name', 'last_name', 'city', 'country')
    ordering = ('id',)

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Персональная информация', {'fields': ('first_name', 'last_name', 'profile_picture', 'age', 'city', 'country', 'steam_profile')}),
        ('Любимые игры', {'fields': ('favorite_games',)}),
        ('Права доступа', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Даты', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'first_name', 'last_name', 'password1', 'password2'),
        }),
    )

    filter_horizontal = ('favorite_games', 'groups', 'user_permissions')


@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('name',)
