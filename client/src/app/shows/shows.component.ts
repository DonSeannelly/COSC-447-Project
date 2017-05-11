import { Component, OnInit } from '@angular/core';
import { Show } from '../models/Show';
import { ShowsService } from './shows.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  shows: Show[];
  editID: number = -1;

  constructor(public showsService: ShowsService) {
    //this.shows = showsService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.showsService.update(this.shows[index]);
  }

  remove(id: number, index: number) {
    this.shows.splice(index, 1);
    this.showsService.remove(id);
  }

}
