from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(max_length = 100, unique = True)
    first_name = models.TextField()
    last_name = models.TextField()
    profile = models.TextField(default=None, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Task(models.Model): 
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField()
    completed = models.BooleanField(default=False)
    date_created = models.DateField(auto_now_add=True)
