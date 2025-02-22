from django.shortcuts import render, get_object_or_404
from .models import News

def news_list(request):
    """Страница со списком всех новостей"""
    all_news = News.objects.all()
    return render(request, 'news_list.html', {'all_news': all_news})

def news_detail(request, news_id):
    """Страница с подробной информацией о конкретной новости"""
    news_item = get_object_or_404(News, id=news_id)
    return render(request, 'news_detail.html', {'news_item': news_item})
