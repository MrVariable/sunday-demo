import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  employee = new Employee();
  constructor(
    public employeeService: EmployeeService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.employeeService.save(this.employee);
    this.router.navigate(['/employees']);
  }

}
