# Generated by Django 4.2 on 2025-02-22 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_age_user_city_user_country_user_favorite_game_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название игры')),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='favorite_game',
        ),
        migrations.AddField(
            model_name='user',
            name='favorite_games',
            field=models.ManyToManyField(blank=True, to='users.game', verbose_name='Любимые игры'),
        ),
    ]
