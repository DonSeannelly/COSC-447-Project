import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';

@Injectable()
export class EquipmentService implements serviceInterface {
    constructor(private http: Http) {
    }
    get() {
        return this.http.get('/api/eqipment')
            .map(res => res.json());
    }
    create(record) {
        return this.http.get('/api/equipment', record)
            .map(res => res.json());
    }
    remove(id) {
        return this.http.delete('/api/equipment/' + id)
            .map(res => res.json());
    }
    update(record) {
        return this.http.put('/api/equipment', record)
            .map(res => res.json());
    }
}promo
