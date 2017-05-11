import { Component, OnInit } from '@angular/core';
import { Tour } from '../models/Tour';
import { TourService } from './tours.service';

@Component({
  selector: 'app-acts',
  templateUrl: './tours.component.html'
})
export class ToursComponent implements OnInit {

  tours: Tours[];
  editID: number = -1;

  constructor(public tourService: TourService) { 
    this.tours = tourService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.tourService.update(this.tours[index]);
  }

  remove(index: number) {
    this.tours.splice(index, 1);
    this.tourService.remove(this.tours[index]);
  }

}