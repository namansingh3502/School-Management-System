from django import forms
from .models import *
from django.forms import ModelForm, ChoiceField

class Login_Form(forms.Form):
    username = forms.CharField(label="Username", max_length=50)
    password = forms.CharField(widget=forms.PasswordInput, label='Password')
