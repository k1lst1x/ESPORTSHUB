from django.urls import path, include

from users.views import Register, ProfileView, create_tournament, create_team, create_participant, tournament_list, tournament_detail, team_detail, profile_frame_shop

urlpatterns = [
    path('', include('django.contrib.auth.urls')),

    path('register/', Register.as_view(), name='register'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('tournaments/', tournament_list, name='tournament_list'),
    path('tournaments/create/', create_tournament, name='create_tournament'),
    path('tournaments/<int:pk>/', tournament_detail, name='tournament_detail'),
    path('team/<int:pk>/', team_detail, name='team_detail'),
    path('teams/create/', create_team, name='create_team'),
    path('players/create/', create_participant, name='create_participant'),
    path('shop', profile_frame_shop, name='shop')

]
