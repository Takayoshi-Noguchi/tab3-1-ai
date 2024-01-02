import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Aa101TopRoutingModule } from './aa101-top-routing.module';
import { Aa101TopComponent } from './aa101-top.component';
import { Aa201g01Component } from './aa201g01/aa201g01.component';

@NgModule({
  declarations: [
    Aa101TopComponent,
    Aa201g01Component
  ],
  imports: [
    CommonModule,
    Aa101TopRoutingModule
  ]
})
export class Aa101TopModule { }
