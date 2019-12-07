import { Component, OnInit } from '@angular/core';

import { SongsService } from './songs.service';
import { Song } from '../models/Song';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private songService: SongsService) {}

  songTitle: string;
  songs: Song[];
  error: string;

  ngOnInit() {}

  searchSong(searchValue): void {
    this.songs = [];
    this.error = null;
    if (!searchValue) {
      this.error = 'something wrong! try again';
      console.log('noValue');
    } else {
      this.songService.findSong(searchValue).subscribe(songs => {
        if (songs.length === 0) {
          this.error = 'no result. try again';
        } else {
          this.songs = songs;
        }
      });
      console.log(searchValue);
    }
  }
}
