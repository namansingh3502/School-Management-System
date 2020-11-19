from django import forms
from .models import *
from django.forms import ModelForm, ChoiceField

class Login_Form(forms.Form):
    username = forms.CharField(label="Username", max_length=50)
    password = forms.CharField(widget=forms.PasswordInput, label='Password')

class Profile_Form( ModelForm ):
    class Meta:
        model = Profile
        exclude = ['user','first_login']
        

class Permission_Form( ModelForm ):
    class Meta:
        model = Data_Permission
        exclude = ['user']
        widget = {
            'Class': ChoiceField( choices = CLASS ),
            'subjects': ChoiceField( choices= SUBJECTS )
        }
