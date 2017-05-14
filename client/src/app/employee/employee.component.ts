import {Component, OnInit} from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  editID: number = -1;
  editNewEmployee: boolean;
  newEmployee: Employee;

  constructor(public employeeService: EmployeeService) {
    this.employees = employeeService.get();
    this.newEmployee = new Employee("","","","","","","","","",null);
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

  remove(index: number, employeeID: number) {
    this.employees.splice(index, 1);
    this.employeeService.remove(this.employees[employeeID]).subscribe();
  }
    openNewEmployeeDialog() {
        this.editNewEmployee = true;
    }
    closeNewEmployeeDialog() {
        this.editNewEmployee = false;
    }
    createNewEmployee() {
        this.employeeService.create(this.newEmployee).subscribe(res => {
            this.newEmployee.employeeID = res.id;
            this.closeNewEmployeeDialog();
            this.employees.push(this.newEmployee);
            this.newEmployee = new Employee("","","","","","","","","",null);
        });
    }
}
