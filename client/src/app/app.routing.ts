import {RouterModule} from '@angular/router';
import {ActsComponent} from './acts/acts.component';
import {EmployeeComponent} from './employee/employee.component';
import {EquipmentComponent} from './equipment/equipment.compenent';
import {HousingComponent} from './housing/housing.component';
import {PromotersComponent} from './promoter/promoters.component';
import {ShowsComponent} from './shows/shows.component';
import {ToursComponent} from './tours/tours.component';
import {VenueComponent} from './venue/venue.component';

export const routing = RouterModule.forRoot([
    {path:'acts', component: ActsComponent},
    {path:'employee', component: EmployeeComponent},
    {path:'equipment', component: EquipmentComponent},
    {path:'housing', component: HousingComponent},
    {path:'promoter', component: PromotersComponent},
    {path:'shows', component: ShowsComponent},
    {path:'tours', component: ToursComponent},
    {path:'venue', component: VenueComponent}
]);