from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from users.views import home, game_view, how_it_works_view

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('', home, name='home'),
    path('game/', game_view, name='game'),
    path('how-it-works/', how_it_works_view, name='how_it_works'),

    path('users/', include('users.urls')),
    path('news/', include('news.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)\
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
