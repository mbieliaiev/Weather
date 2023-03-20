import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {
  private apiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

  constructor(private http: HttpClient) {}

  searchCities(query: string): Observable<any> {
    // if (query.length < 3) {
    //   return new Observable<any>();
    // }

    const headers = {
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      'x-rapidapi-key': 'daac0091ddmsh54fe285611e7ac0p12638djsnb5c693efbf4a'
    };

    const params = {
      namePrefix: query,
      limit: '10',
      sort: 'name'
    };

    return this.http.get(this.apiUrl, { headers, params });
  }
}