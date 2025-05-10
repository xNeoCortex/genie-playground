from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Customer(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=50, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Lead(models.Model):
    title = models.CharField(max_length=128)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    status = models.CharField(max_length=64, choices=(
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('qualified', 'Qualified'),
        ('lost', 'Lost'),
        ('converted', 'Converted'),
    ), default='new')
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

class Opportunity(models.Model):
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    value = models.DecimalField(max_digits=12, decimal_places=2)
    status = models.CharField(max_length=64, choices=(
        ('open', 'Open'),
        ('won', 'Won'),
        ('lost', 'Lost'),
    ), default='open')
    close_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.lead.customer.name}"

class Activity(models.Model):
    ACTIVITY_TYPES = (
        ('call', 'Call'),
        ('email', 'Email'),
        ('meeting', 'Meeting'),
        ('note', 'Note'),
        ('task', 'Task'),
    )
    subject = models.CharField(max_length=200)
    activity_type = models.CharField(max_length=30, choices=ACTIVITY_TYPES)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    opportunity = models.ForeignKey(Opportunity, on_delete=models.CASCADE, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    due_date = models.DateTimeField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.activity_type} - {self.subject}"