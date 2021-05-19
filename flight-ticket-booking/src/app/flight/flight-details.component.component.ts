import { Component, OnInit } from '@angular/core';
import {FlightBookingDemoServiceService} from'../services/flight-booking-demo-service.service'

@Component({
  selector: 'app-flight-details.component',
  template: `
    <div class="booking-details">
          <div>
               <p class="card-title" >View the Flight</p>
          </div>
      <table mat-table [dataSource]="dataSource">
          <!-- Passenger Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="flight-details-table">Passenger Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>

          <!-- Bookingid Id column -->
        <ng-container matColumnDef="_id">
          <th mat-header-cell *matHeaderCellDef class="flight-details-table">Bookingid Id</th>
          <td mat-cell *matCellDef="let element">{{ element._id }}</td>
        </ng-container>

          <!-- No of Tickets Column -->
        <ng-container matColumnDef="number_of_tickets">
          <th mat-header-cell *matHeaderCellDef class="flight-details-table">No of Tickets</th>
          <td mat-cell *matCellDef="let element">{{ element.number_of_tickets }}</td>
        </ng-container>

          <!-- Amount Column -->
          <ng-container  matColumnDef="amount">
          <th mat-header-cell *matHeaderCellDef class="flight-details-table">Amount</th>
          <td mat-cell *matCellDef="let element">{{ element.amount}}</td>
        </ng-container>

          <!-- Delete button Column -->
        <ng-container  matColumnDef="delete">
          <th mat-header-cell *matHeaderCellDef class="flight-details-table">Delete</th>
          <td mat-cell *matCellDef="let element">
            <button (click)= "deleteFlightDetails(element._id)" mat-flat-button color="warn">
             Delete
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
  styles: [],
})
export class FlightDetails implements OnInit {
  public obs$;
  public displayedColumns: string[] = ['name', '_id', 'number_of_tickets', 'amount', 'delete'];
  public dataSource : PeriodicElement [];

  constructor( private localStoreService : FlightBookingDemoServiceService){}

  /** get Data onInit */
  ngOnInit(): void {
    this.localStoreService.getFlightDatalocalStorage().subscribe(data=>{
        if(data){
          console.log(data, '')
          this.dataSource = data;
        }
    })
  }

  deleteFlightDetails(id){
    console.log(id);
  this.obs$ = this.localStoreService.deleteFlightDatalocalStorage(id).subscribe((data)=>{
    if(data){
        alert('You have sucessfully booked the Flight !!')
         this.ngOnInit();
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

export interface PeriodicElement {
   _id:  string;
   name: string;
   flight_id: string;
   number_of_tickets: number;
   amount : number;
   delete: string;
}

