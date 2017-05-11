import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';

@Injectable()
export class HousingService implements serviceInterface {
    constructor(private http: Http) {
    }
     get() {
        var result = [];
        var count = 0;
        this.http.get('/api/housing')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {condition: temp[0].value, type: temp[1].value, mode: temp[2].value,
                    housingID: temp[3].value, venueID: temp[4].value};
                count++;
            }
        });
        return result;
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
