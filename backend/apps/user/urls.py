
from django.contrib import admin
from django.urls import path,include
from .views import UserLoginView,UserRegisterView,UserDetailsView,ForgetPasswordView,ResetForgetPasswordView

urlpatterns = [
    path('login/', UserLoginView.as_view(),name='login'),
    path('register/', UserRegisterView.as_view(),name='register'),
    path('details/', UserDetailsView.as_view(),name='details'),
    path('forget-password/', ForgetPasswordView.as_view(),name='forget_passpord'),
    path('reset/', ResetForgetPasswordView.as_view(),name='reset'),
    path('delete/', ResetForgetPasswordView.as_view(),name='delete'),
]
