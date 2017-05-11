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
        this.http.get('/api/shows')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {date: temp[0].value, startTime: temp[1].value, endTime: temp[2].value,
                    doorsTime: temp[3].value, expectedSales: temp[4].value, showID: temp[5].value,
                    venID: temp[6].value, tourID: temp[7].value};
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
