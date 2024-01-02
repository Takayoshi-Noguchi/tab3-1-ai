import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Aa101TopComponent } from './aa101-top.component';
import { Aa201g01Component } from './aa201g01/aa201g01.component';
import { Aa202g01Component } from './aa202g01/aa202g01.component';

const routes: Routes = [
  {
    path: "", component: Aa101TopComponent,
    children : [
      { path: 'aa201g01', component: Aa201g01Component },
      { path: 'aa202g01', component: Aa202g01Component },
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Aa101TopRoutingModule { }
