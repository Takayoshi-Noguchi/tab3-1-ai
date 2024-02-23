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
  
  currentScreenUrl = '';
  currentTab: Az101Tab = az101TabBlank;  // TODO ここを型定義できないか？

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
    tabService.tabs$.subscribe(tabs => {
      console.log("Aa101TopComponent tab変更 [" + tabs + "]");
        this.tabs = tabs
      }
    )
    // URLが変更された場合（業務リンクの場合）、タブを切り替える
    tabService.currentTab$.subscribe(currentTab => {
      this.currentTab = currentTab;
      // if (Object.keys(currentTab).length === 0) {
      if (currentTab.tabId === '') {
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
  onClickTab(tabId: string) {
    window.console.log("Aa101TopComponent onClickTab() タブが押された");
    this.changeTab(tabId);
  }

  // タブ切り替え処理
  changeTab(tabId: string) {
    let tab: Az101Tab = this.tabService.getTab(tabId);
    // 画面保存 TODOここを表示中の画面ＩＤで実行したい（tobeのタブＩＤではない）
    this.cacheService.executeKeep(this.currentTab.tabId);
    // タブを選択状態にする
    this.currentScreenUrl = tab.screenUrl;
    // ルーティング
    this.router.navigate([tab.screenUrl])
  }

  // 検索条件でEnter押下時
  onSubmit() {
    // TODO保留　クリアボタン押下時に発火するのをどうにかしたい
  }

  // 照会ボタン押下時
  onClickRefer() {
    window.console.log("Aa101TopComponent onClickRefer() 照会ボタンが押された");
    // タブが表示されている場合、タブをすべて削除し、タブを表示する。
    this.tabService.clear();
    this.tabService.addTab('aa201g01');
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
