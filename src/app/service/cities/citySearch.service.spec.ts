import { TestBed } from '@angular/core/testing';

import { CitySearchService } from './citySearch.service';

describe('CitySearchService', () => {
  let service: CitySearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitySearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
