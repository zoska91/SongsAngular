import { SongsService } from './search/songs.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { FormsModule } from '@angular/forms';
import { ChordsModule } from './chords/chords.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    FormsModule,
    HttpClientModule,
    ChordsModule,
    HomeModule
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
