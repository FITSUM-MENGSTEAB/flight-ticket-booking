import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightBooking}  from './flight/flight-booking.component.component';
import {FlightDetails} from './flight/flight-details.component.component';




const routes: Routes = [
{path : 'f-booking', component: FlightBooking},
{path : 'f-details', component: FlightDetails},
{path :'**', redirectTo: '',   pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
