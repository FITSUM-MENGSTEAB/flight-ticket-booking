import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightBooking } from './flight-booking.component.component';
import { FlightDetails } from './flight-details.component.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MaterialModule} from '../material/material.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports :[ FlightBooking, FlightDetails]
})
export class FlightModule { }
