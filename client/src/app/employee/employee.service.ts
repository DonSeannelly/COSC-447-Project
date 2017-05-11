import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';
import {Employee} from "../models/Employee";

@Injectable()
export class EmployeeService implements serviceInterface {
  constructor(private http: Http) {
  }
  get() {
        var result = [];
        var count = 0;
        this.http.get('/api/employees')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {employeeID: temp[0].value, position: temp[1].value, phone: temp[2].value, firstName: temp[3].value,
                  lastName: temp[4].value, middleInitial: temp[5].value, zip: temp[6].value, state: temp[7].value, city: temp[8].value, street: temp[9].value};
                count++;
            }
        });
        return result;
    }
  create(record: Employee) {
    return this.http.get('/api/employee', this.mapToSchema(record))
        .map(res => res.json());
  }
  remove(id) {
    return this.http.delete('/api/employee/' + id)
        .map(res => res.json());
  }
  update(record: Employee) {
    return this.http.put('/api/employee', this.mapToSchema(record))
        .map(res => res.json());
  }
  mapToSchema(record: Employee) {
    return {
      Emp_ID: record.employeeID,
      Position: record.position,
      Phone: record.phone,
      Fname: record.firstName,
      Lname: record.lastName,
      Minit: record.middleInitial,
      Zip: record.zip,
      State: record.state,
      City: record.city,
      Street: record.street
    };
  }
}
