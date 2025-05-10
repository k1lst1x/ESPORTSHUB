# services.py
from .models import Match

def advance_winner(match: Match):
    """Помещаем победителя в следующий раунд."""
    next_round = match.round_number + 1
    # индекс места победителя в следующем раунде
    next_order = match.order_in_round // 2

    nxt, created = Match.objects.get_or_create(
        tournament=match.tournament,
        round_number=next_round,
        order_in_round=next_order,
        defaults={'team1': None, 'team2': None},
    )

    # определяем, в какой слот (team1 / team2) ставить победителя
    if match.order_in_round % 2 == 0:
        nxt.team1 = match.winner
    else:
        nxt.team2 = match.winner
    nxt.save()
