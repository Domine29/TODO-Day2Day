from django.urls import path, include

urlpatterns = [
    path('day2day/', include('todo_app.urls')),
]