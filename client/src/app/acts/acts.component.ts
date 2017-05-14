import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Act} from '../models/Act';
import {ActService} from './acts.service';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
    selector: 'app-acts',
    templateUrl: './acts.component.html',
})
export class ActsComponent implements OnInit {
    @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

    editNewAct: boolean;
    newAct: Act;
    acts: Act[];
    editID: number = -1;

    constructor(private actService: ActService, private router: Router, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            var parent = params['parent'];
            var id = params['id'];

            if(parent === 'promoter') {
                this.acts = actService.getPromoterActs(id);
            } else {
                this.acts = actService.get();
            }
        });
        this.newAct = new Act("","","","","",null);
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

    switchContext(id: number, isShow: boolean) {
        if(isShow) {
            this.router.navigate(['shows','act',id]);
        } else {
            this.router.navigate(['promoter','act',id]);
        }
    }

    openNewActDialog() {
        this.editNewAct = true;
    }
    closeNewActDialog() {
        this.editNewAct = false;
    }
    createNewAct() {
        this.actService.create(this.newAct).subscribe(res => {
            this.newAct.actID = res.id;
            this.closeNewActDialog();
            this.acts.push(this.newAct);
            this.newAct = new Act("","","","","",null);
        });
    }
}
