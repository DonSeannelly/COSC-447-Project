import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from './serviceInterface';

@Injectable()
export class TicketService implements serviceInterface {
  constructor(private http: Http) {
  }
  get() {
    return this.http.get('/api/ticket')
        .map(res => res.json());
  }
  getShowTickets(id) {
    return this.http.get('/api/ticket/' + id)
        .map(res => res.json());
  }
  create(record) {
    return this.http.get('/api/ticket', record)
        .map(res => res.json());
  }
  remove(id) {
    return this.http.delete('/api/ticket/' + id)
        .map(res => res.json());
  }
  update(record) {
    return this.http.put('/api/ticket', record)
        .map(res => res.json());
  }

}