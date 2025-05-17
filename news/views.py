from .models import News, Comment
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect

POINTS_FOR_COMMENT = 5

def news_list(request):
    """Страница со списком всех новостей"""
    all_news = News.objects.all()
    return render(request, 'news_list.html', {'all_news': all_news})

def news_detail(request, news_id):
    """Страница с подробной информацией о конкретной новости и комментариями"""
    news_item = get_object_or_404(News, id=news_id)
    comments = Comment.objects.filter(news=news_item)

    if request.method == 'POST':
        if request.user.is_authenticated:
            comment_text = request.POST.get('comment_text', '').strip()
            if comment_text:
                Comment.objects.create(
                    news=news_item,
                    user=request.user,
                    text=comment_text
                )

                # ✅ Начисляем очки пользователю
                request.user.points += POINTS_FOR_COMMENT
                request.user.save()

        else:
            return redirect('login')

        return redirect('news_detail', news_id=news_id)

    return render(request, 'news_detail.html', {
        'news_item': news_item,
        'comments': comments
    })
