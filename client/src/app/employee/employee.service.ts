import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from './serviceInterface';

@Injectable()
export class EmployeeService implements serviceInterface {
  constructor(private http: Http) {
  }
  get() {
    return this.http.get('/api/eployees')
        .map(res => res.json());
  }
  create(record) {
    return this.http.get('/api/employee', record)
        .map(res => res.json());
  }
  remove(id) {
    return this.http.delete('/api/employee/' + id)
        .map(res => res.json());
  }
  update(record) {
    return this.http.put('/api/employee', record)
        .map(res => res.json());
  }

}