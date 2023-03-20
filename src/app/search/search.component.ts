import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CitySearchService } from '../service/cities/citySearch.service';

import { WeatherService } from '../service/weather/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cityControl = new FormControl();
  cities: any[] = [];
  selectedCity: any;

  @Output() onAddCityEvent = new EventEmitter<any>();
  

  constructor(private weatherService: WeatherService,
    private citySearchService: CitySearchService) {
    this.cityControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(value => {
        if (value.length > 3) {
          // return this.citySearchService.searchCities(value);
          let cities = this.weatherService.getCities(value);
          return cities;
        }
        else
          return [];
      })
    ).subscribe(response => {
      // debugger;
      // this.cities = response.data;
      this.cities = response.results;
    });
  }

  ngOnInit() { }

  displayFn(city: any): string {
    return city ? city.name : '';
  }

  onSelectionChanged(event: any): void {
    this.selectedCity = event.option.value;
  }

  onAddCity() {
    if (this.selectedCity) {
      this.weatherService.getWeather(this.selectedCity).subscribe((data: any) => {
        this.onAddCityEvent.emit(data)
        this.selectedCity = null;
        this.cityControl.setValue('');
      });
    }
  }
}
