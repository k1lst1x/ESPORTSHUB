from django import template

register = template.Library()

@register.filter
def mul(value, arg):
    """Умножение"""
    try:
        return float(value) * float(arg)
    except (ValueError, TypeError):
        return ''

@register.filter
def div(value, arg):
    """Деление"""
    try:
        return float(value) / float(arg)
    except (ValueError, ZeroDivisionError, TypeError):
        return ''

@register.filter
def to_int(value):
    """Округление в целое число"""
    try:
        return int(round(float(value)))
    except (ValueError, TypeError):
        return ''
