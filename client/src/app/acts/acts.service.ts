import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';
import { Act } from '../models/Act';

@Injectable()
export class ActService implements serviceInterface {
    constructor(private http: Http) {
    }
    get() {
        var result = [];
        var count = 0;
        this.http.get('/api/acts')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {actID: temp[0].value, name: temp[1].value, email: temp[2].value,
                    genre: temp[3].value, city: temp[4].value, state: temp[5].value};
                count++;
            }
        });
        return result;
    }
    create(record: Act) {
        return this.http.get('/api/act', this.mapToSchema(record))
            .map(res => res.json());
    }
    remove(id) {
        return this.http.delete('/api/act/' + id)
            .map(res => res.json());
    }
    update(record: Act) {
        return this.http.put('/api/act', this.mapToSchema(record))
            .map(res => res.json());
    }
    mapToSchema(record: Act) {
      return {
        Act_ID: record.actID,
        Name: record.name,
        Email: record.email,
        Genre: record.genre,
        City: record.city,
        State: record.state
      };
    }

}
