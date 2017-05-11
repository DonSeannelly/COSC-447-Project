import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  editID: number = -1;

  constructor(public employeeService: EmployeeService) { 
    //this.employees = employeeService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.employeeService.update(this.employees[index]).subscribe();
  }

  remove(index: number) {
    this.employees.splice(index, 1);
    this.employeeService.remove(this.employees[index]).subscribe();
  }

}
