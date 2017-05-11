import {Component, OnInit, ViewChild} from '@angular/core';
import { Equipment } from '../models/Equipment';
import { EquipmentService } from './equipment.service';
import {ContextMenuComponent} from "ngx-contextmenu";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html'
})
export class EquipmentComponent implements OnInit {
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  equipment: Equipment[];
  editID: number = -1;

  constructor(public equipmentService: EquipmentService) {
    this.equipment = equipmentService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.equipmentService.update(this.equipment[index]).subscribe();
  }

  remove(index: number, equipmentID: number) {
    this.equipment.splice(index, 1);
    this.equipmentService.remove(this.equipment[equipmentID]).subscribe();
  }

}

