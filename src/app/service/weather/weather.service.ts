import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.weatherstack.com/current';
  private apiKey = '58a1476e488ccef5d93e539b07ba654f';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?access_key=${this.apiKey}&query=${city}`;
    return this.http.get(url);
  }

  getCities(query: string): Observable<any> {
    const url = `http://api.weatherstack.com/autocomplete?access_key=${this.apiKey}&query=${query}`;
    return this.http.get(url);
  }
  
}