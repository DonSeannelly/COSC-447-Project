import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(public venueService: VenueService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      var parent = params['parent'];
      var id = params['id'];
      if(parent === 'equipment'){
        this.venues = venueService.getEquipmentVenues(id);
      } else {
        this.venues = venueService.get();
      }
    });

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
    this.venueService.remove(venueID).subscribe();
  }
  switchContext(id: number, isEquipment: boolean) {
    if(isEquipment) {
      this.router.navigate(['equipment','venue',id]);
    } else {
      this.router.navigate(['shows','venue',id]);
    }
  }
}
