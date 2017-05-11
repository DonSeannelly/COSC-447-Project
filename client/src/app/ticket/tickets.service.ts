import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';
import {Ticket} from "../models/Ticket";

@Injectable()
export class TicketService implements serviceInterface {
  constructor(private http: Http) {
  }
  get() {
        var result = [];
        var count = 0;
        this.http.get('/api/tickets')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {showID: temp[0].value, actID: temp[1].value, amountsold: temp[2].value, amountgiven: temp[3].value,
                    price: temp[4].value};
                count++;
            }
        });
        return result;
    }
  getShowTickets(id) {
    return this.http.get('/api/ticket/' + id)
        .map(res => res.json());
  }
  create(record: Ticket) {
    return this.http.get('/api/ticket', this.mapToSchema(record))
        .map(res => res.json());
  }
  remove(id) {
    return this.http.delete('/api/ticket/' + id)
        .map(res => res.json());
  }
  update(record: Ticket) {
    return this.http.put('/api/ticket', this.mapToSchema(record))
        .map(res => res.json());
  }
  mapToSchema(record: Ticket) {
    return {
      Show_ID: record.showID,
      Act_ID: record.actID,
      Amount_Sold: record.amountSold,
      Amount_Given: record.amountGiven,
      Price: record.price
    };
  }

}
