import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SongsService } from './songs.service';
import { Song } from './../models/Song';

describe('SongsService', () => {
  let service: SongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: SongsService,
          useFactory: () => new SongsService(null)
        }
      ]
    });
    service = TestBed.get(SongsService);
  });

  it('should service be created', () => {
    expect(service).toBeTruthy();
  });

  // it('be able to retrieve posts from the API bia GET', () => {
  //   service.findSong('summer time').subscribe(songs => {
  //     expect(songs.length).toBe(5);
  //   });

  //   const request = httpMock.expectOne(
  //     'https://www.songsterr.com/a/ra/songs.json?pattern=Summer'
  //   );
  //   expect(request.request.method).toBe('GET');
  // });

  // afterEach(() => {
  //   httpMock.verify();
  // });
});
