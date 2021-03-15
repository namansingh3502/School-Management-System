from django import template

register = template.Library()

@register.filter(name="subjects")
def subjects( class_pk ):
    return scores.filter(student=student)