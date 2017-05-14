import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';
import {Promoter} from "../models/Promoter";

@Injectable()
export class PromoterService implements serviceInterface {
    constructor(private http: Http) {}
 	  get() {
        var result = [];
        var count = 0;
        this.http.get('/api/promoters')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {promoterID: temp[0].value, firstName: temp[1].value, lastName: temp[2].value,
                    middleInitial: temp[3].value, phone: temp[4].value, organization: temp[5].value};
                count++;
            }
        });
        return result;
    }
    getActPromoters(id) {
        var result = [];
        var count = 0;
        this.http.get('/api/promoters/act/' + id)
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {promoterID: temp[0].value, firstName: temp[1].value, lastName: temp[2].value,
                    middleInitial: temp[3].value, phone: temp[4].value, organization: temp[5].value};
                count++;
            }
        });
        return result;
    }
    create(record: Promoter) {
        return this.http.post('/api/promoter', this.mapToSchema(record))
            .map(res => res.json());
    }
    remove(id) {
        return this.http.delete('/api/promoter/' + id)
            .map(res => res.json());
    }
    update(record: Promoter) {
        return this.http.put('/api/promoter', this.mapToSchema(record))
            .map(res => res.json());
    }
    mapToSchema(record: Promoter) {
      return {
        Pro_ID: record.promoterID,
        Fname: record.firstName,
        Lname: record.lastName,
        Minit: record.middleInitial,
        Phone: record.phone,
        Organization: record.organization
      }
    }
}
