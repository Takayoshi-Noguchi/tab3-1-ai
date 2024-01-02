import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Aa101TopModule } from './aa101-top/aa101-top.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    Aa101TopModule
  ]
})
export class MainModule { }
