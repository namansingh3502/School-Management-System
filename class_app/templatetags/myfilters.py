from django import template

register = template.Library()

@register.filter(name="student_score")
def student_score( scores, student ):
    return scores.filter(student=student)

@register.filter(name="get_subject_score")
def get_subject_score( scores, subject ):
    return scores.get(subject=subject).score
