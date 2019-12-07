import { SongsListComponent } from './songs-list/songs-list.component';
import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SongsService } from './songs.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchComponent],
      providers: [
        {
          provide: SongsService,
          useFactory: () => new SongsService(null)
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sould renter form with input', () => {
    const complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('.search__form')).toBeTruthy();
    expect(complied.querySelector('.search__input')).toBeTruthy();
  });

  it('should create the app', async(
    inject([SongsService], (songsService: SongsService) => {
      const app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
    })
  ));

  // it('should check search value', () => {
  //   const comp = new SearchComponent(SongsService);
  //   const resultEmpty = comp.searchSong('');
  //   expect(resultEmpty).toContain('noValue');

  //   const result = comp.searchSong('title');
  //   expect(result).toContain('title');
  // });
});
