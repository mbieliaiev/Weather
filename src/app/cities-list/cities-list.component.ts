import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {
  @Input() selectedCities: any[] = [];

  ngOnInit(): void { }
  
  removeCityHandler(city: any) {
    const index = this.selectedCities.indexOf(city);
    if (index !== -1) {
      this.selectedCities.splice(index, 1);
    }
  }
}
