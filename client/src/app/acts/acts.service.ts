import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';

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
                result[count] = {Act_ID: temp[0].value, Name: temp[1].value, Email: temp[2].value,
                    Genre: temp[3].value, City: temp[4].value, State: temp[5].value};
                count++;
            }
        });
        return result;
    }
    create(record) {
        return this.http.get('/api/act', record)
            .map(res => res.json());
    }
    remove(id) {
        return this.http.delete('/api/act/' + id)
            .map(res => res.json());
    }
    update(record) {
        return this.http.put('/api/act', record)
            .map(res => res.json());
    }

}