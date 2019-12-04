import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { SET_BY_FILTER } from '../../environments/enums';
import { SetBy } from '../employee/filters';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {
  allEmployees: Array<Employee>;
  employees: Array<Employee>;
  setByFilters: Array<SetBy>;
  filterObj: any = {setBy: '', salary: null};
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.setByFilters = [
      {id: SET_BY_FILTER.NEUTRAL, name: '-- Select Any --'},
      {id: SET_BY_FILTER.LESS, name: 'Less Than'},
      {id: SET_BY_FILTER.GREATER, name: 'Greater Than'},
    ];
    this.allEmployees = this.employeeService.getAll();
    this.employees = this.allEmployees;
  }

  search() {
    if (this.filterObj.salary) {
      this.employees = this.allEmployees.filter(emp => {
        switch (this.filterObj.setBy) {
          case 'less':
            return emp.salary <= this.filterObj.salary;
          case 'greater':
            return emp.salary >= this.filterObj.salary;
          default:
            return emp.salary === this.filterObj.salary;
        }
      });
    } else {
      this.employees = this.allEmployees;
    }
  }
}
