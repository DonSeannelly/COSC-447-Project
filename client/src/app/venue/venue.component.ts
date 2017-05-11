import {Component, OnInit, ViewChild} from '@angular/core';
import { Venue } from '../models/Venue';
import { VenueService } from './venue.service';
import {ContextMenuComponent} from "ngx-contextmenu";

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
})
export class VenueComponent implements OnInit {
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  venues: Venue[];
  editID: number = -1;

  constructor(public venueService: VenueService) {
    this.venues = venueService.get();
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

  remove(index: number, venueID: number) {
    this.venues.splice(index, 1);
    this.venueService.remove(this.venues[venueID]).subscribe();
  }

}
