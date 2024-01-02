import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Aa101TopComponent } from './aa101-top/aa101-top.component';
import { Aa101TopModule } from './aa101-top/aa101-top.module';
import { Aa201g01Component } from './aa101-top/aa201g01/aa201g01.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    // Aa101TopComponent,
    // Aa201g01Component
    // MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    Aa101TopModule
  ]
})
export class MainModule { }
