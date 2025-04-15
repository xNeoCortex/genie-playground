from django.views import generic
from .models import Customer, Lead, Opportunity, Activity

# Customer Views
class CustomerListView(generic.ListView):
    model = Customer
    template_name = "crm/customer_list.html"

class CustomerDetailView(generic.DetailView):
    model = Customer
    template_name = "crm/customer_detail.html"

class CustomerCreateView(generic.CreateView):
    model = Customer
    fields = ["name", "email", "phone", "address"]
    template_name = "crm/customer_form.html"
    success_url = "/crm/customers/"

class CustomerUpdateView(generic.UpdateView):
    model = Customer
    fields = ["name", "email", "phone", "address"]
    template_name = "crm/customer_form.html"
    success_url = "/crm/customers/"

class CustomerDeleteView(generic.DeleteView):
    model = Customer
    template_name = "crm/customer_confirm_delete.html"
    success_url = "/crm/customers/"

# Similar pattern can be followed for Lead, Opportunity, Activity