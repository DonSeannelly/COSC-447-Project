import { Component, OnInit } from '@angular/core';
import { Housing } from '../models/Housing';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html'
})
export class HousingComponent implements OnInit {

  housing: Housing[];
  editID: number = -1;

  constructor(public housingService: HousingService) { 
    this.housing = housingService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.housingService.update(this.housing[index]).subscribe();
  }

  remove(index: number, housingID: number) {
    this.housing.splice(index, 1);
    this.housingService.remove(this.housing[housingID]).subscribe();
  }

}

