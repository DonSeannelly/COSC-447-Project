import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';

@Injectable()
export class PromoterService implements serviceInterface {
    constructor(private http: Http) {
    }
 	get() {
        var result = [];
        var count = 0;
        this.http.get('/api/promoters')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {firstName: temp[0].value, lastName: temp[1].value, middleInitial: temp[2].value,
                    phone: temp[3].value, organization: temp[4].value, promoterID: temp[5].value};
                count++;
            }
        });
        return result;
    }
    create(record) {
        return this.http.get('/api/promoter', record)
            .map(res => res.json());
    }
    remove(id) {
        return this.http.delete('/api/promoter/' + id)
            .map(res => res.json());
    }
    update(record) {
        return this.http.put('/api/promoter', record)
            .map(res => res.json());
    }
}
