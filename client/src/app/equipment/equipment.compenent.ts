import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  editNewEquipment: boolean;
  newEquipment: Equipment;

  constructor(public equipmentService: EquipmentService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      var parent = params['parent'];
      var id = params['id'];

      if(parent === 'venue') {
        this.equipment = equipmentService.getVenueEquipment(id);
      } else {
        this.equipment = equipmentService.get();
      }
    });
    this.newEquipment = new Equipment("","","",null,null);
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

  switchContext(id){
    this.router.navigate(['venue','equipment',id]);
  }
  openNewEquipmentDialog() {
        this.editNewEquipment = true;
    }
    closeNewEquipmentDialog() {
        this.editNewEquipment = false;
    }
    createNewEquipment() {
        this.equipmentService.create(this.newEquipment).subscribe(res => {
            this.newEquipment.equipmentID = res.id;
            this.closeNewEquipmentDialog();
            this.equipment.push(this.newEquipment);
            this.newEquipment = new Equipment("","","",null,null);
        });
    }
}

