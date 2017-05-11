import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from './serviceInterface';

@Injectable()
export class CostsService implements serviceInterface {
    constructor(private http: Http) {
    }
    get() {
        var result = [];
        var count = 0;
        this.http.get('/api/ticket')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {Show_ID: temp[0].value, Lights: temp[1].value, Sound: temp[2].value,
                    Bouncer: temp[3].value, Bar: temp[4].value, Promoter_Cost: temp[5].value,
                    Band_Payout: temp[6].value};
                count++;
            }
        });
        return result;
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