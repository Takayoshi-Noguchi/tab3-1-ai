import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Aa101TopComponent } from './aa101-top/aa101-top.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    Aa101TopComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
