from django.shortcuts import render
from django.http import HttpResponse
from .models import Item

def index(request):
    items = Item.objects.all()
    return render(request, "myapp/index.html", {"items": items})

def hello(request):
    return HttpResponse("Hello from MyApp!")