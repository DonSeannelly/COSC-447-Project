import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from './serviceInterface';

@Injectable()
export class ShowsService implements serviceInterface {
  constructor(private http: Http) {
  }
  get() {
        var result = [];
        var count = 0;
        this.http.get('/api/ticket')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {Date: temp[0].value, Start_Time: temp[1].value, End_Time: temp[2].value,
                    Doors_Time: temp[3].value, Expected_Sales: temp[4].value, Show_ID: temp[5].value,
                    Ven_ID: temp[6].value, Tour_ID: temp[7].value};
                count++;
            }
        });
        return result;
  }
  create(record) {
    return this.http.get('/api/show', record)
        .map(res => res.json());
  }
  remove(id) {
    return this.http.delete('/api/show/' + id)
        .map(res => res.json());
  }
  update(record) {
    return this.http.put('/api/show', record)
        .map(res => res.json());
  }

}
