import {Component, OnInit, ViewChild} from '@angular/core';
import { Promoter } from '../models/Promoter';
import { PromoterService } from './promoters.service';
import {ContextMenuComponent} from "ngx-contextmenu";

@Component({
  selector: 'app-promoters',
  templateUrl: './promoters.component.html'
})
export class PromotersComponent implements OnInit {
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  promoters: Promoter[];
  editID: number = -1;

  constructor(public promoterService: PromoterService) {
    this.promoters = promoterService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.promoterService.update(this.promoters[index]).subscribe();
  }

  remove(index: number, promoterID: number) {
    this.promoters.splice(index, 1);
    this.promoterService.remove(this.promoters[promoterID]).subscribe();
  }

}
