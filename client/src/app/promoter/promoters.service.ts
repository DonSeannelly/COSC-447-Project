import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';

@Injectable()
export class PromoterService implements serviceInterface {
    constructor(private http: Http) {
    }
    get() {
        return this.http.get('/api/promoters')
            .map(res => res.json());
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
