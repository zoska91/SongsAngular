import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SearchComponent } from './search.component';
import { SongsService } from './songs.service';
import { SongsListComponent } from './songs-list/songs-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule],
  declarations: [SearchComponent, SongsListComponent],
  exports: [SearchComponent],
  providers: [SongsService]
})
export class SearchModule {}
