import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map, tap, pluck, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { WeatherNowReq } from '../weather/models/weatherNowReq';
import { CreateWeatherNowRes } from '../weather/models/weatherNowRes';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private _http: HttpClient, private _router: Router) { }

  weatherNow(data: WeatherNowReq) {
    return this._http.get(`${environment.weatherUrl}?q=${data.city}&appid=${environment.weatherApiKey}`, {
      // headers: {
      //   'x-refresh-token': this.getRefreshToken(),
      //   '_id': this.getUserId()
      // },
      // observe: 'response'
    }).pipe(
      map((res) => {
        return CreateWeatherNowRes(res);
      })
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
