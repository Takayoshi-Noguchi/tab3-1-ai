import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Az101Tab, az101TabBlank } from './common/az101-tab/az101-tab';
import { Az101TabConst } from './common/az101-tab/az101-tab-const';
import { Az101TabService } from './common/az101-tab/az101-tab.service';
import { Az102CacheService } from './common/az102-cache/az102-cache.service';

@Component({
  selector: 'app-aa101-top',
  templateUrl: './aa101-top.component.html',
  styleUrls: ['./aa101-top.component.scss']
})
export class Aa101TopComponent {

  tabs: Az101Tab[] = [];
  
  currentTabId = '';
  currentTab: Az101Tab = az101TabBlank;

  isReferButtonClicked: boolean = false;

  // 検索フォーム
  searchForm = this.fb.group({
    referNo: [''],
    contractName: [''],
    contractNameKana: [''],
  })



  constructor(
    private router: Router,
    private tabService: Az101TabService,
    private fb: FormBuilder,
    private cacheService: Az102CacheService) {
    
    // タブが追加・削除された場合、タブを再表示する
    tabService.tabs$.subscribe(tabInfo => {
      console.log("Aa101TopComponent tab変更 [" + JSON.stringify(tabInfo) + "]");
        // TODO 選択されたタブIDを設定してから、tabsを設定する
      this.tabs = tabInfo.tabs;
      this.currentTabId = tabInfo.tabId;
      // 初期表示・クリアボタン押下時はタブが存在しないため、何も処理しない
      if (this.tabs.length > 0) {
        if (this.isReferButtonClicked) {
          // 照会ボタン押下時の処理　単純に画面遷移のみ行う　画面保存処理は不要
          this.isReferButtonClicked = false;
          let tab = this.tabs[0];
          this.router.navigate([tab.screenUrl])
        } else {
          // タブクリック処理
          this.changeTab(tabInfo.tabId);
        }
      }
    })
  }

  // タブ押下時
  onClickTab(tabId: string) {
    window.console.log("Aa101TopComponent onClickTab() タブが押された");
    this.changeTab(tabId);
  }

  // タブ切り替え処理
  changeTab(tabId: string) {
    let beforeTabId = this.currentTabId;
    let afterTabId = tabId;
    // 表示中の画面保存
    this.cacheService.executeKeep(beforeTabId);

    // 遷移先のタブを選択状態にする
    this.currentTabId = afterTabId;

    // 遷移先のタブ情報を取得
    let afterTab: Az101Tab = this.tabService.getTab(afterTabId);
    // ルーティング
    this.router.navigate([afterTab.screenUrl])
  }

  // 検索条件でEnter押下時
  onSubmit() {
    // TODO保留　クリアボタン押下時に発火するのをどうにかしたい
  }

  // 照会ボタン押下時
  onClickRefer() {
    window.console.log("Aa101TopComponent onClickRefer() 照会ボタンが押された");
    this.isReferButtonClicked = true;
    // タブが表示されている場合、タブをすべて削除し、タブを表示する。
    this.cacheService.clear();
    this.tabService.openFirstTabs(Az101TabConst.FIRST_TABS);
  }

  // クリアボタン押下時
  onClickClear() {
    // 検索条件をクリア
    this.searchForm.patchValue({
      referNo: '',
      contractName: '',
      contractNameKana: '',
    })
    this.cacheService.clear();
    this.tabService.clear();
    this.router.navigate(['/'])
  }

}
