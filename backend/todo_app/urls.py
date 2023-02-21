from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/load_tasks', views.load_tasks),
    re_path(r'.*', views.index),
]