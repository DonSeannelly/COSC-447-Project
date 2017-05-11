import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ContextMenuModule} from 'ngx-contextmenu';

import {AppComponent} from './app.component';
import {ActsComponent} from './acts/acts.component';
import {EmployeeComponent} from './employee/employee.component';
import {EquipmentComponent} from './equipment/equipment.compenent';
import {HousingComponent} from './housing/housing.component';
import {PromotersComponent} from './promoter/promoters.component';
import { ShowsComponent } from './shows/shows.component';
import {TicketComponent} from './ticket/ticket.component';
import {ToursComponent} from './tours/tours.component';
import {VenueComponent} from './venue/venue.component';
import {CostsComponent} from './costs/costs.component';
import { NavigationComponent } from './navigation/navigation.component';

import {ActService} from './acts/acts.service';
import {EmployeeService} from './employee/employee.service';
import {EquipmentService} from './equipment/equipment.service';
import {HousingService} from './housing/housing.service';
import {PromoterService} from './promoter/promoters.service';
import {ShowsService} from './shows/shows.service';
import {TicketService} from './ticket/tickets.service';
import {ToursService} from './tours/tours.service';
import {VenueService} from './venue/venue.service';
import {QueryService} from './query.service';
import {CostsService} from './costs/costs.service';

import {routing} from './app.routing';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
    declarations: [
        AppComponent,
        ActsComponent,
        EmployeeComponent,
        EquipmentComponent,
        HousingComponent,
        PromotersComponent,
        TicketComponent,
        ToursComponent,
        VenueComponent,
        ShowsComponent,
        CostsComponent,
        NavigationComponent,
        HomepageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ContextMenuModule,
        routing
    ],
    providers: [
        ActService,
        QueryService,
        EmployeeService,
        EquipmentService,
        HousingService,
        PromoterService,
        TicketService,
        ToursService,
        VenueService,
        ShowsService,
        CostsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
