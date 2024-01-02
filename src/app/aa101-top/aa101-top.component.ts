import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aa101-top',
  templateUrl: './aa101-top.component.html',
  styleUrls: ['./aa101-top.component.scss']
})
export class Aa101TopComponent {

  tabs = [
    {
      screenUrl: 'aa201g01',
      name: '契約情報照会'
    },
    {
      screenUrl: 'aa202g01',
      name: '商品情報'
    },
  ];
  
  currentScreenUrl = '';

  constructor(private router: Router) {
  }

  changeTab(screenUrl: string) {
    this.currentScreenUrl = screenUrl;
    window.console.log("タブが押された");
    this.router.navigate([screenUrl])
  }
}
