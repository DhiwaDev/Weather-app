
import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  location!: string;
  weather: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    this.errorMessage = '';
    if (this.location) {
      this.weatherService.getWeather(this.location)
        .subscribe((res) => {
          // console.log(res);
          this.weather = res;
        },
          (error) => {
            this.errorMessage = 'Failed to fetch weather data. Please check the location';
          }
        );
    } else {
      this.errorMessage = 'Please enter a location';
    }
  }
  getWeatherIconUrl(iconCode: string): string {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
  }
}
