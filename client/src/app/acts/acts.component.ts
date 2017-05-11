import { Component, OnInit, ViewChild } from '@angular/core';
import { Act } from '../models/Act';
import { ActService } from './acts.service';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
})
export class ActsComponent implements OnInit {
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  acts: Act[];
  editID: number = -1;

  constructor(private actService: ActService) {
    this.acts = actService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.actService.update(this.acts[index]).subscribe();
  }

  remove(index: number, id: number) {
    this.acts.splice(index, 1);
    this.actService.remove(id).subscribe();
  }

}
