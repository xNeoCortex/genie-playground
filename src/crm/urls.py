from django.urls import path
from . import views

urlpatterns = [
    path("customers/", views.CustomerListView.as_view(), name="customer-list"),
    path("customers/<int:pk>/", views.CustomerDetailView.as_view(), name="customer-detail"),
    path("customers/create/", views.CustomerCreateView.as_view(), name="customer-create"),
    path("customers/<int:pk>/edit/", views.CustomerUpdateView.as_view(), name="customer-edit"),
    path("customers/<int:pk>/delete/", views.CustomerDeleteView.as_view(), name="customer-delete"),
    # You can add similar URL patterns for Lead, Opportunity, Activity
]