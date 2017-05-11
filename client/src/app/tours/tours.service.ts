import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';
import {Tour} from "../models/Tour";

@Injectable()
export class ToursService implements serviceInterface {
  constructor(private http: Http) {
  }
  get() {
        var result = [];
        var count = 0;
        this.http.get('/api/tours')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {title: temp[0].value, tourID: temp[1].value};
                count++;
            }
        });
        return result;
    }
  create(record: Tour) {
    return this.http.get('/api/tour', this.mapToSchema(record))
        .map(res => res.json());
  }
  remove(id) {
    return this.http.delete('/api/tour/' + id)
        .map(res => res.json());
  }
  update(record: Tour) {
    return this.http.put('/api/tour', this.mapToSchema(record))
        .map(res => res.json());
  }
  mapToSchema(record: Tour) {
    return {
      Title: record.title,
      Tour_ID: record.tourID
    };
  }

}
