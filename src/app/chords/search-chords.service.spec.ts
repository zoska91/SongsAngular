import { TestBed } from '@angular/core/testing';

import { SearchChordsService } from './search-chords.service';

describe('SearchChordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchChordsService = TestBed.get(SearchChordsService);
    expect(service).toBeTruthy();
  });
});
