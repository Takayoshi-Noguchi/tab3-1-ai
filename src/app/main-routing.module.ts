import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Aa101TopComponent } from './aa101-top/aa101-top.component';

const routes: Routes = [
  { path: "", redirectTo: "aa101-top", pathMatch: 'full'},
  { path: "aa101-top", component: Aa101TopComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainRoutingModule { }
