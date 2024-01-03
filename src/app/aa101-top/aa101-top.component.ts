import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Az101Tab } from './common/az101-tab/az101-tab';
import { Az101TabConst } from './common/az101-tab/az101-tab-const';
import { Az101TabService } from './common/az101-tab/az101-tab.service';

@Component({
  selector: 'app-aa101-top',
  templateUrl: './aa101-top.component.html',
  styleUrls: ['./aa101-top.component.scss']
})
export class Aa101TopComponent {

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
      if (Object.keys(currentTab).length === 0) {
        // クリアボタン押下時はタブ情報が存在しないので、固定でクリアする
        this.currentScreenUrl = '';
        return;
      }
      // タブ情報が存在する場合、タブ情報を表示する。
      this.currentScreenUrl = currentTab.screenUrl;
      this.changeTab(currentTab.screenUrl);
    })
    
  }

  // タブ押下時
  changeTab(tabId: string) {
    window.console.log("タブが押された");
    let tab: Az101Tab = this.tabService.getTab(tabId);
    // タブを選択状態にする
    this.currentScreenUrl = tab.screenUrl;
    // ルーティング
    this.router.navigate([tab.screenUrl])
  }

  // 照会ボタン押下時
  onClickRefer() {
    // タブが表示されている場合、タブをすべて削除し、タブを表示する。
    this.tabService.clear();
    this.tabService.addTab('aa201g01');
    this.tabService.openFirstTabs(Az101TabConst.FIRST_TABS);
  }

  // クリアボタン押下時
  onClickClear() {
    this.tabService.clear();
    this.router.navigate(['/'])
  }

}
