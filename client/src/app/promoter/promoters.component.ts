import { Component, OnInit } from '@angular/core';
import { Promoter } from '../models/Promoter';
import { PromoterService } from './promoters.service';

@Component({
  selector: 'app-promoters',
  templateUrl: './promoters.component.html'
})
export class PromotersComponent implements OnInit {

  promoters: Promoter[];
  editID: number = -1;

  constructor(public promoterService: PromoterService) { 
    //this.promoters = promoterService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.promoterService.update(this.promoters[index]).subscribe();
  }

  remove(index: number) {
    this.promoters.splice(index, 1);
    this.promoterService.remove(this.promoters[index]).subscribe();
  }

}
