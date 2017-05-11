import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from './serviceInterface';

@Injectable()
export class HousingService implements serviceInterface {
  constructor(private http: Http) {
  }
  get() {
    return this.http.get('/api/housing')
        .map(res => res.json());
  }
  getVenueHousing(id) {
    return this.http.get('/api/housing/' + id)
        .map(res => res.json());
  }
  create(record) {
    return this.http.get('/api/housing', record)
        .map(res => res.json());
  }
  remove(id) {
    return this.http.delete('/api/housing/' + id)
        .map(res => res.json());
  }
  update(record) {
    return this.http.put('/api/housing', record)
        .map(res => res.json());
  }

}