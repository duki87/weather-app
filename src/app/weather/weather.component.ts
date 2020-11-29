import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather.service';
import { WeatherNowRes } from './models/weatherNowRes';

@Component({
  selector: 'wap-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  weatherData: WeatherNowRes;

  ngOnInit(): void {

  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => { 
      console.log("Got position", position.coords);
      // this.lat = position.coords.latitude; 
      // this.lon = position.coords.longitude;
    });    
  }

  getWeatherByCity(weatherLocation) {
    return this._weatherService.weatherNow({ city: weatherLocation })
      .subscribe((res: WeatherNowRes) => {
        this.weatherData = res;
      })
  }

  searchWeatherLocation(location) {
    return this.getWeatherByCity(location);
  }

}
