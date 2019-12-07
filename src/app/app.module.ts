import { SongsService } from './search/songs.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ChordsComponent } from './chords/chords.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, ChordsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
