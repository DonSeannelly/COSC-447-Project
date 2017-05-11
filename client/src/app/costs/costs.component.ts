import { Component, OnInit } from '@angular/core';
import { Cost } from '../models/Cost';
import { CostsService } from './costs.service';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html'
})
export class CostsComponent implements OnInit {

  costs: Cost[];
  editID: number = -1;

  constructor(public costsService: CostsService) { 
    this.costs = costsService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.costsService.update(this.costs[index]).subscribe();
  }

  remove(index: number, id:number) {
    this.costs.splice(index, 1);
    this.costsService.remove(id).subscribe();
  }

}