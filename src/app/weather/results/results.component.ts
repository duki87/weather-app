import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherNowRes } from '../models/weatherNowRes';

@Component({
  selector: 'wap-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() weatherData: WeatherNowRes;
  showData: boolean = false;
  weatherIconUrl = environment.weatherIconUrl;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.weatherData.currentValue !== undefined) {
      this.showData = true;
      console.log(changes.weatherData.currentValue)
    }
  }

}
