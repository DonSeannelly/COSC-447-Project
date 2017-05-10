import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from './serviceInterface';

@Injectable()
export class ShowsService implements serviceInterface {
  constructor(private http: Http) {
  }
  get() {
    return this.http.get('/api/shows')
        .map(res => res.json());
  }
  create(record) {
    return this.http.get('/api/show', record)
        .map(res => res.json());
  }
  remove(id) {
    return this.http.delete('/api/show/' + id)
        .map(res => res.json());
  }
  update(record) {
    return this.http.put('/api/show', record)
        .map(res => res.json());
  }

}