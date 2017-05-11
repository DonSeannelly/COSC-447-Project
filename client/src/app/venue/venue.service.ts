import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';

@Injectable()
export class VenueService implements serviceInterface {
    constructor(private http: Http) {
    }
    get() {
        var result = [];
        var count = 0;
        this.http.get('/api/venue')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {venueID: temp[0].value, pointOfContact: temp[1].value, capacity: temp[2].value,
                    name: temp[3].value, city: temp[4].value, state: temp[5].value, street: temp[6].value,
					zip: temp[7].value, type: temp[8].value, timeOpen: temp[9].value, timeClose: temp[10].value};
                count++;
            }
        });
        return result;
    }
    create(record) {
        return this.http.get('/api/venue', record)
            .map(res => res.json());
    }
    remove(id) {
        return this.http.delete('/api/venue/' + id)
            .map(res => res.json());
    }
    update(record) {
        return this.http.put('/api/venue', record)
            .map(res => res.json());
    }

}