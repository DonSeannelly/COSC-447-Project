import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Show } from '../models/Show';
import { ShowsService } from './shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html'
})
export class ShowsComponent implements OnInit {

  shows: Show[];
  editID: number = -1;

  constructor(public showService: ShowsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      var parent = params['parent'];
      var id = params['id'];

      if(parent === "act") {
        this.shows = showService.getActShows(id);
      } else if (parent === "venue"){
        this.shows = showService.getVenueShows(id);
      } else if (parent === "tours") {
        this.shows = showService.getToursShows(id);
      } else {
          this.shows = showService.get();
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
    this.showService.update(this.shows[index]).subscribe();
  }

  remove(id: number, index: number) {
    this.shows.splice(index, 1);
    this.showService.remove(id).subscribe();
  }

}
