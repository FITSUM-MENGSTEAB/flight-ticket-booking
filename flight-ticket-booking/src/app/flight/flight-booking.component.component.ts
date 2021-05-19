import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {nameValidator, numberOfTicketsValidator,flightIdValidator, unique_id }  from './validator';
import {FlightBookingDemoServiceService} from'../services/flight-booking-demo-service.service'


@Component({
  selector: 'app-flight-booking.component',
  template: `
    <div class="booking-form">
      <div class="card text-center">
        <div style="content-align:center;">
          <p class="card-title">Book the Flight</p>
        </div>
        <div>
          <form [formGroup]="flightForm" (ngSubmit)="onsubmit()">
            <mat-form-field class="form-full-width">
              <mat-label style="margin-left:30px" > Passanger Name </mat-label>
              <input
                style="margin-left:30px"
                matInput
                placeholder="Passanger Name"
                formControlName="name"
              />
              <small
                *ngIf="
                  flightForm.controls['name'].invalid &&
                  flightForm.controls['name'].dirty
                "
                style="color:red"
                >Field required</small
              >
            </mat-form-field>
            <mat-form-field class="form-full-width">
              <mat-label style="margin-left:30px"> Number of Tickets </mat-label>
              <input
                style="margin-left:30px"
                matInput
                placeholder="Number of Tickets"
                formControlName="number_of_tickets"
              />
              <small
                *ngIf="
                  flightForm.controls['number_of_tickets'].invalid &&
                  flightForm.controls['number_of_tickets'].dirty
                "
                style="color:red"
                >Enter the number of tickets greater than 0</small>
            </mat-form-field>
            <mat-form-field class="form-full-width">
              <mat-label style="margin-left:30px"> Flight Id </mat-label>
              <input
                style="margin-left:30px"
                matInput
                placeholder="Flight Id"
                formControlName="flight_id"
              />
              <small
                *ngIf="
                  flightForm.controls['flight_id'].invalid &&
                  flightForm.controls['flight_id'].dirty
                "
                style="color:red"
                >Enter valid flightID </small>
            </mat-form-field>
            <button
              style="margin:20px"
              mat-stroked-button color="primary"
              type="submit"
              [disabled]="!flightForm.valid">
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class FlightBooking implements OnInit {
    public obs$;
    flightForm = new FormGroup({
    name: new FormControl('', [Validators.required,nameValidator]),
    number_of_tickets: new FormControl('', [Validators.required, numberOfTicketsValidator]),
    flight_id: new FormControl('', [Validators.required, flightIdValidator]),
  });

  constructor( private router : Router, private localStoreService : FlightBookingDemoServiceService){}

  ngOnInit() {

  }


   /** After we get valid Data we can submit(post data API) */
  onsubmit() {
    let _id = unique_id();
    let user_data = {_id, amount:this.flightForm.value. number_of_tickets*150.5, delete:this.flightForm.value.flight_id, ...this.flightForm.value}
    console.log(user_data);
    this.obs$  = this.localStoreService.saveUserDataToLocalStorage(user_data).subscribe((data)=>{
      if(data){
          alert('You have sucessfully booked the Flight !!')
         this.router.navigate(['']);
      }
    },
    (error)=>{
        alert('Somthing Went wrong !!!  Please try again ')
    });

  }

  /** avoid memory-leak  */
  ngOnDestroy() {
    if (this.obs$) {
      this.obs$.unsubscribe();
    }
  }
}

