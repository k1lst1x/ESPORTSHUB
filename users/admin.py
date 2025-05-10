from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .models import Game, ProfileFrame, Tournament, Team, Participant, Match

from users.forms import UserCreationForm, UserChangeForm

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
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('id', 'username', 'email', 'first_name', 'last_name', 'age', 'city', 'country', 'points', 'selected_frame', 'is_staff', 'is_active')
    list_display_links = ('id', 'username')
    list_filter = ('is_staff', 'is_active', 'city', 'country')
    search_fields = ('username', 'email', 'first_name', 'last_name', 'city', 'country')
    ordering = ('id',)

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Персональная информация', {
            'fields': (
                'first_name',
                'last_name',
                'profile_picture',
                'age',
                'city',
                'country',
                'steam_profile',
                'points',
                'purchased_frames',
                'selected_frame',
            )
        }),
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

    filter_horizontal = ('favorite_games', 'groups', 'user_permissions', 'purchased_frames')

@admin.register(ProfileFrame)
class ProfileFrameAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('name',)

class ParticipantInline(admin.TabularInline):
    model = Participant
    extra = 0  # не добавлять пустые формы по умолчанию
    fields = ('full_name', 'nickname', 'email', 'user')
    readonly_fields = ('user',)


class TeamInline(admin.TabularInline):
    model = Team
    extra = 0
    fields = ('name', 'creator', 'logo')
    readonly_fields = ('creator',)


@admin.register(Tournament)
class TournamentAdmin(admin.ModelAdmin):
    list_display = ('name', 'creator', 'discipline', 'type', 'max_teams', 'max_team_members', 'prize_pool')
    list_filter = ('discipline', 'type', 'format')
    search_fields = ('name', 'creator__email')
    inlines = [TeamInline]


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'tournament', 'creator')
    list_filter = ('tournament__discipline',)
    search_fields = ('name', 'creator__email', 'tournament__name')
    inlines = [ParticipantInline]


@admin.register(Participant)
class ParticipantAdmin(admin.ModelAdmin):
    list_display = ('nickname', 'full_name', 'email', 'team', 'user')
    search_fields = ('nickname', 'full_name', 'email', 'team__name')
    list_filter = ('team__tournament__discipline',)

@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    list_display = ('tournament', 'round_number', 'order_in_round',
                    'team1', 'score_team1', 'team2', 'score_team2', 'winner')
    list_filter  = ('tournament', 'round_number', 'is_finished')