import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Promoter} from '../models/Promoter';
import {PromoterService} from './promoters.service';
import {ContextMenuComponent} from "ngx-contextmenu";

@Component({
    selector: 'app-promoters',
    templateUrl: './promoters.component.html'
})
export class PromotersComponent implements OnInit {
    @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

    promoters: Promoter[];
    editID: number = -1;
    editNewPromoter: boolean;
    newPromoter: Promoter;

    constructor(public promoterService: PromoterService, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            var parent = params['parent'];
            var id = params['id'];
            if(parent === 'act') {
                this.promoters = promoterService.getActPromoters(id);
            } else {
                this.promoters = promoterService.get();
            }
        });
        this.newPromoter = new Promoter("","","","","",null);
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

    switchContext(id) {
        this.router.navigate(['acts','promoter',id]);
    }
    openNewPromoterDialog() {
        this.editNewPromoter = true;
    }
    closeNewPromoterDialog() {
        this.editNewPromoter = false;
    }
    createNewPromoter() {
        this.promoterService.create(this.newPromoter).subscribe(res => {
            this.newPromoter.promoterID = res.id;
            this.closeNewPromoterDialog();
            this.promoters.push(this.newPromoter);
            this.newPromoter = new Promoter("","","","","",null);
        });
    }
}
