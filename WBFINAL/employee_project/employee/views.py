from django.shortcuts import render, redirect
from .models import Employee

def employee_list(request):
    employees = Employee.objects.all()
    return render(request, 'employee/list.html', {'employees': employees})

def add_employee(request):
    if request.method == 'POST':
        Employee.objects.create(
            name=request.POST['name'],
            code=request.POST['code'],
            salary=request.POST['salary'],
            city=request.POST['city']
        )
        return redirect('/')
    return render(request, 'employee/add.html')

def delete_employee(request, id):
    Employee.objects.get(id=id).delete()
    return redirect('/')

