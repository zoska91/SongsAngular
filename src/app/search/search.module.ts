import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SearchComponent } from './search.component';
import { SearchSongComponent } from './search-song/search-song.component';
import { SongsService } from './songs.service';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule],
  declarations: [SearchComponent, SearchSongComponent],
  exports: [SearchComponent],
  providers: [SongsService]
})
export class SearchModule {}
