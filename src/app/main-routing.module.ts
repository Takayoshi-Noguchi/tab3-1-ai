import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Aa101TopComponent } from './aa101-top/aa101-top.component';
import { Aa201g01Component } from './aa101-top/aa201g01/aa201g01.component';

const routes: Routes = [
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
