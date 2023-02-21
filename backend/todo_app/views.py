from django.http import HttpResponse
from todo_app.models import *
from django.core import serializers
from rest_framework.decorators import api_view
import json

def index(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(["GET"])
def load_tasks(request):
    tasks = Task.objects.all()
    tasks_json = serializers.serialize('json', tasks)

    return HttpResponse(tasks_json)