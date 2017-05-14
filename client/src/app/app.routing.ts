import {RouterModule} from '@angular/router';
import {ActsComponent} from './acts/acts.component';
import {EmployeeComponent} from './employee/employee.component';
import {EquipmentComponent} from './equipment/equipment.compenent';
import {HousingComponent} from './housing/housing.component';
import {PromotersComponent} from './promoter/promoters.component';
import {ShowsComponent} from './shows/shows.component';
import {ToursComponent} from './tours/tours.component';
import {VenueComponent} from './venue/venue.component';
import {HomepageComponent} from './homepage/homepage.component';
import {Show} from "./models/Show";

export const routing = RouterModule.forRoot([
    {path:'', component: HomepageComponent},
    {path:'acts', component: ActsComponent},
    {path:'employee', component: EmployeeComponent},
    {path:'equipment', component: EquipmentComponent},
    {path:'housing', component: HousingComponent},
    {path:'promoter', component: PromotersComponent},
    {path:'shows', component: ShowsComponent},
    {path:'tours', component: ToursComponent},
    {path:'venue', component: VenueComponent},

    // context switch routes
    {path:'shows/:parent/:id', component: ShowsComponent},
    {path:'promoter/:parent/:id', component: PromotersComponent},
    {path:'venue/:parent/:id', component: VenueComponent },
    {path:'acts/:parent/:id', component: ActsComponent},
    {path:'shows/:parent/:id', component: ShowsComponent},
    {path:'equipment/:parent/:id', component: EquipmentComponent}
]);