import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wap-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => { 
      console.log("Got position", position.coords);
      // this.lat = position.coords.latitude; 
      // this.lon = position.coords.longitude;
    });    
  }

}
