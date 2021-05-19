import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightBookingDemoServiceService {
  constructor(private http: HttpClient) {}



  saveUserDataToLocalStorage(data: {}) {
    localStorage.setItem('access-token','sampleToken');
    let currentData: any = JSON.parse(localStorage.getItem('user'));
    if (currentData) {
      console.log(currentData);
      let updatedData: any[] =
        currentData.length > 0 ? [...currentData, data] : [currentData, data];
      localStorage.setItem('user', JSON.stringify(updatedData));
      return of('sucessfully data Saved !!');
    }

    localStorage.setItem('user', JSON.stringify([data]));
    return of('sucessfully data Saved !!');
  }



  getFlightDatalocalStorage() {
    let data = JSON.parse(localStorage.getItem('user'));
    if (data) return of(data);
    else {
      return of({ user: [] });
    }
  }



  deleteFlightDatalocalStorage(_id) {
    let data = JSON.parse(localStorage.getItem('user'));
    if (data) {
      let newData = data.filter(item=>{
          return item._id !=_id
      })
      localStorage.clear();
      localStorage.setItem('user', JSON.stringify(newData));
      return of('sucessfully data Delated  !!');
    }
  }
}
