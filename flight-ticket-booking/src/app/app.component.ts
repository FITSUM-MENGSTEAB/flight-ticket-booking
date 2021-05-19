import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
public homePage : boolean = true;

ngOnInit(){
    this.homePage = true;
}


  navigate(){
    this.homePage = false;
  }



  reloadCurrentPage() {
    window.location.reload();
   }

}

