import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';

@Injectable()
export class TicketService implements serviceInterface {
  constructor(private http: Http) {
  }
  get() {
        var result = [];
        var count = 0;
        this.http.get('/api/ticket')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {ticketID: temp[0].value, amountsold: temp[1].value, amountgiven: temp[2].value,
                    price: temp[3].value};
                count++;
            }
        });
        return result;
    }
  getShowTickets(id) {
    return this.http.get('/api/ticket/' + id)
        .map(res => res.json());
  }
  create(record) {
    return this.http.get('/api/ticket', record)
        .map(res => res.json());
  }
  remove(id) {
    return this.http.delete('/api/ticket/' + id)
        .map(res => res.json());
  }
  update(record) {
    return this.http.put('/api/ticket', record)
        .map(res => res.json());
  }

}