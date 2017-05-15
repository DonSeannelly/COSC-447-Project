import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from '../models/Tour';
import { ToursService } from './tours.service';
import {ContextMenuComponent} from "ngx-contextmenu";

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html'
})
export class ToursComponent implements OnInit {
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  tours: Tour[];
  editID: number = -1;
  newTour: Tour;
  editNewTour: boolean;

  constructor(public tourService: ToursService, private router: Router) {
    this.tours = tourService.get();    
    this.newTour = new Tour("",null);
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.tourService.update(this.tours[index]).subscribe();
  }

  remove(index: number, tourID: number) {
    this.tours.splice(index, 1);
    this.tourService.remove(tourID).subscribe();
  }
  switchContext(id) {
    this.router.navigate(['shows','tours',id])
  }
      openNewTourDialog() {
        this.editNewTour = true;
    }
    closeNewTourDialog() {
        this.editNewTour = false;
    }
    createNewTour() {
        this.tourService.create(this.newTour).subscribe(res => {
            this.newTour.tourID = res.id;
            this.closeNewTourDialog();
            this.tours.push(this.newTour);
            this.newTour = new Tour("",null);
        });
    }
}
