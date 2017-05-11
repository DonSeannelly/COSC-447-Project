import { Component, OnInit } from '@angular/core';
import { Show } from '../models/Show';
import { ShowsService } from './shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html'
})
export class ShowsComponent implements OnInit {

  shows: Show[];
  editID: number = -1;

  constructor(public showService: ShowsService) { 
    this.shows = showService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.showService.update(this.shows[index]);
  }

  remove(id: number, index: number) {
    this.shows.splice(index, 1);
    this.showService.remove(id);
  }

}