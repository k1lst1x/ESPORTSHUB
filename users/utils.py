from .models import Match
# utils.py
def generate_first_round(tournament):
    teams = list(tournament.teams.all().order_by('id'))
    matches = []
    for idx in range(0, len(teams), 2):
        m = Match.objects.create(
            tournament=tournament,
            round_number=1,
            order_in_round=idx // 2,
            team1=teams[idx],
            team2=teams[idx + 1] if idx + 1 < len(teams) else None,
        )
        # «bye» — команда без соперника сразу проходит дальше
        if m.team2 is None:
            m.score_team1, m.score_team2 = 1, 0
            m.set_winner()
        matches.append(m)
    return matches
