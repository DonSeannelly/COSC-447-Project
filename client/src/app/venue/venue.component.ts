import { Component, OnInit } from '@angular/core';
import { Venue } from '../models/Venue';
import { VenueService } from './venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
})
export class VenueComponent implements OnInit {

  venues: Venue[];
  editID: number = -1;

  constructor(public venueService: VenueService) { 
    //this.venues = venueService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.venueService.update(this.venues[index]).subscribe();
  }

  remove(index: number) {
    this.venues.splice(index, 1);
    this.venueService.remove(this.venues[index]).subscribe();
  }

}
