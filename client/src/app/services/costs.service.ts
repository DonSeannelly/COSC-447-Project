import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from './serviceInterface';

@Injectable()
export class CostsService implements serviceInterface {
    constructor(private http: Http) {
    }
    get() {
        return this.http.get('/api/costs')
            .map(res => res.json());
    }
    create(record) {
        return this.http.get('/api/cost', record)
            .map(res => res.json());
    }
    remove(id) {
        return this.http.delete('/api/cost/' + id)
            .map(res => res.json());
    }
    update(record) {
        return this.http.put('/api/cost', record)
            .map(res => res.json());
    }

}