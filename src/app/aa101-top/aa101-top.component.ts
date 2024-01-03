import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Az101Tab } from './common/az101-tab/az101-tab';
import { Az101TabService } from './common/az101-tab/az101-tab.service';

@Component({
  selector: 'app-aa101-top',
  templateUrl: './aa101-top.component.html',
  styleUrls: ['./aa101-top.component.scss']
})
export class Aa101TopComponent {

  // tabs = [
  //   {
  //     screenUrl: 'aa201g01',
  //     name: '契約情報照会'
  //   },
  //   {
  //     screenUrl: 'aa202g01',
  //     name: '商品情報'
  //   },
  // ];
  tabs: Az101Tab[] = [];
  
  currentScreenUrl = '';
  currentTab = '';  // TODO ここを型定義できないか？

  constructor(
    private router: Router,
    private tabService: Az101TabService) {
    
    // タブ情報が変更された場合、タブを再表示する
    tabService.tabs$.subscribe(tabs => 
      this.tabs = tabs
    )
    // URLが変更された場合、タブを切り替える
    tabService.currentTab$.subscribe(currentTab => {
        this.currentTab = currentTab;
        this.currentScreenUrl = currentTab.screenUrl;
        this.changeTab(currentTab.screenUrl);
      }
    )
    
  }

  changeTab(tabId: string) {
    window.console.log("タブが押された");
    let tab: Az101Tab = this.tabService.getTab(tabId);
    // タブを選択状態にする
    this.currentScreenUrl = tab.screenUrl;
    // ルーティング
    this.router.navigate([tab.screenUrl])
  }
}
