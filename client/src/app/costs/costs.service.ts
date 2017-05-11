import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';
import { Cost } from '../models/Cost';

@Injectable()
export class CostsService implements serviceInterface {
    constructor(private http: Http) {
    }
    get() {
        var result = [];
        var count = 0;
        this.http.get('/api/cost')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {showID: temp[0].value, lights: temp[1].value, sound: temp[2].value,
                    bouncer: temp[3].value, Bar: temp[4].value, promoterCost: temp[5].value,
                    bandPayout: temp[6].value};
                count++;
            }
        });
        return result;
  }
    create(record: Cost) {
        return this.http.get('/api/cost', this.mapToSchema(record))
            .map(res => res.json());
    }
    remove(id) {
        return this.http.delete('/api/cost/' + id)
            .map(res => res.json());
    }
    update(record: Cost) {
        return this.http.put('/api/cost', this.mapToSchema(record))
            .map(res => res.json());
    }
    mapToSchema(record: Cost) {
      return {
        Show_ID: record.showID,
        Lights: record.lights,
        Sound: record.sound,
        Bouncer: record.bouncer,
        Bar: record.bar,
        Promoter_Cost: record.promoterCost,
        Band_Payout: record.bandPayout
      }
    }

}
