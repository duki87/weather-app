import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherNowComponent } from './weather-now/weather-now.component';
import { SearchComponent } from '../search/search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [WeatherComponent, WeatherNowComponent, SearchComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //Material
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [SearchComponent]
})
export class WeatherModule { }
