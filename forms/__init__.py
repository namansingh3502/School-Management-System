from django import forms
from django.forms import CharField


class Login_Form( forms.Form ):
    username = forms.CharField( label = "Username", max_length = 50 )
    password = forms.CharField( widget=forms.PasswordInput, label='Password')

