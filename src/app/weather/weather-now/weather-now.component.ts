import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../_services/weather.service';
import { WeatherNowReq } from '../../weather/models/weatherNowReq';
import { WeatherNowRes } from '../models/weatherNowRes';

@Component({
  selector: 'wap-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss']
})
export class WeatherNowComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    return this._weatherService.weatherNow({ city: 'Belgrade' })
      .subscribe((res: WeatherNowRes) => {
        console.log(res)
      })
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => { 
      console.log("Got position", position.coords);
      // this.lat = position.coords.latitude; 
      // this.lon = position.coords.longitude;
    });    
  }

}
