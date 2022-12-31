
from django.contrib import admin
from django.urls import path,include
from .views import PaperSaveView,PaperListView,PaperDeleteView

urlpatterns = [
    path('save/', PaperSaveView.as_view(),name='paper save'),
    path('list/', PaperListView.as_view(),name='paper list'),
    path('delete/', PaperDeleteView.as_view(),name='paper list'),
]
