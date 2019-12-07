import { ChordsComponent } from './chords.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModuleModule
  ],
  declarations: [ChordsComponent],
  exports: [ChordsComponent],
  providers: []
})
export class ChordsModule {}
