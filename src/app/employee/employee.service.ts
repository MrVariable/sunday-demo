import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAll() {
    const employeesStr = localStorage.getItem('EMPLOYEES');
    if (employeesStr) {
      return JSON.parse(employeesStr);
    }
    return;
  }

  save(employee: Employee) {
    const emp = employee;
    emp.id = new Date().getTime().toString();
    const employeeList = this.getAll();
    const employees = employeeList ? employeeList : [];
    employees.push(emp);
    localStorage.setItem('EMPLOYEES', JSON.stringify(employees));
  }
}
