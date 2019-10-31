import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  longitude: Number;
  latitude: Number;

  constructor(private http: HttpClient) { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        console.log(this.longitude)
        console.log(this.latitude)
        //add open weather api key here
      });
  } else {
     console.log("No support for geolocation")
  }
  }

  ngOnInit() {
  }

  // getLocation(): void{
  //   if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position)=>{
  //         this.longitude = position.coords.longitude;
  //         this.latitude = position.coords.latitude;
  //       });
  //   } else {
  //      console.log("No support for geolocation")
  //   }
  // }
}
