from django.contrib import admin
from .models import Customer, Lead, Opportunity, Activity

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "created_at")
    search_fields = ("name", "email")

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ("title", "customer", "status", "created_at")
    list_filter = ("status",)
    search_fields = ("title", "customer__name")

@admin.register(Opportunity)
class OpportunityAdmin(admin.ModelAdmin):
    list_display = ("name", "lead", "value", "status", "close_date")
    list_filter = ("status",)
    search_fields = ("name", "lead__title")

@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ("subject", "activity_type", "customer", "due_date", "completed")
    list_filter = ("activity_type", "completed")
    search_fields = ("subject", "customer__name")