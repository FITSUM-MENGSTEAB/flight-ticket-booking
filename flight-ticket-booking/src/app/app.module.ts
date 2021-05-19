import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import { FlightBooking } from './flight/flight-booking.component.component';
import { FlightDetails } from './flight/flight-details.component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FlightIntercepterInterceptor} from './flight-intercepter.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    FlightBooking,
    FlightDetails,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: FlightIntercepterInterceptor, multi: true }], // we can intercept http reqestes
  bootstrap: [AppComponent]
})
export class AppModule { }
