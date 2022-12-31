from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('user/', include('apps.user.urls')),
    path('paper/', include('apps.paper.urls')),
]
