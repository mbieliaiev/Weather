import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() city: any;
  @Output() onRemoveCityEvent = new EventEmitter<any>();

  ngOnInit(): void {
    if (this.city.current.is_day === 'yes') {
      if (this.city.current.cloudcover < 30) {
        this.backgroundColor = '#FF9016';
        this.weatherIcon = 'B';
      }
      else {
        this.backgroundColor = '#0AA4B4';
        this.weatherIcon = 'H';
      }
    }
    else {
      this.backgroundColor = '#434343';
      this.weatherIcon = 'C';
    }
  }

  backgroundColor = 'red';
  weatherIcon = 'A'

  onRemoveCity(removedCity: any) {
    this.onRemoveCityEvent.emit(removedCity);
  }
  
  getWeatherIcon(city: any) {
    return city.current.weather_icons[0];
  }

  getWeatherDescription(city: any) {
    return city.current.weather_descriptions[0];
  }

  getTemperature(city: any) {
    return city.current.temperature;
  }

  get location(): string {
    return `${this.city.location.name}, ${this.city.location.country}`;
  }
}
