from django import template

register = template.Library()

@register.filter(name="get_student_score")
def get_student_score( scores, student ):
    return scores.get(student=student).score