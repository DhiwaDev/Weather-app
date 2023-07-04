import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl = 'http://localhost:8080/weather/';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(this.apiUrl + city);
  }
}
