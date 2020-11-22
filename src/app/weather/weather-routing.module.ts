import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherNowComponent } from './weather-now/weather-now.component';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'now', component: WeatherNowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
