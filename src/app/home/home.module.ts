import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModuleModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
