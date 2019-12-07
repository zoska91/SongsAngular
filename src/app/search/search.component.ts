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
  errors: string[];

  ngOnInit() {}

  searchSong(searchValue): void {
    if (!searchValue) {
      this.errors.push(`something's wrong`);
      console.log('noValue');
    } else {
      this.songService.findSong(searchValue).subscribe(songs => {
        console.log(songs);
        this.songs = songs;
        console.log(this.songs, songs.length);
      });
      console.log(searchValue);
    }
  }
}
