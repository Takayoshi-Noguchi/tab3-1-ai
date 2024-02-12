import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Az101Tab } from './common/az101-tab/az101-tab';
import { Az101TabConst } from './common/az101-tab/az101-tab-const';
import { Az101TabService } from './common/az101-tab/az101-tab.service';
import { CommonComponent } from './common/az102-common/az102-common.component';

@Component({
  selector: 'app-aa101-top',
  templateUrl: './aa101-top.component.html',
  styleUrls: ['./aa101-top.component.scss']
})
export class Aa101TopComponent {

  tabs: Az101Tab[] = [];
  
  currentScreenUrl = '';
  currentTab = '';  // TODO ここを型定義できないか？

  // @ViewChildren(Az102Keep) commonComponents!: QueryList<Az102Keep>;
  // @ViewChildren(CommonComponent) commonComponents!: QueryList<CommonComponent>;

  // ngAfterViewInit() {
  //   this.commonComponents.forEach(component => component.keep());
  // }

  @ViewChild(CommonComponent) commonComponent!: CommonComponent;

  ngAfterViewInit() {
    window.console.log("ngAfterViewInit() " +this.commonComponent);
  }


  // 検索フォーム
  searchForm = this.fb.group({
    referNo: [''],
    contractName: [''],
    contractNameKana: [''],
  })



  constructor(
    private router: Router,
    private tabService: Az101TabService,
    private fb: FormBuilder) {
    
    // // タブ情報が変更された場合、タブを再表示する
    // tabService.tabs$.subscribe(tabs => 
    //   this.tabs = tabs
    // )
    // // URLが変更された場合、タブを切り替える
    // tabService.currentTab$.subscribe(currentTab => {
    //   this.currentTab = currentTab;
    //   if (Object.keys(currentTab).length === 0) {
    //     // クリアボタン押下時はタブ情報が存在しないので、固定でクリアする
    //     this.currentScreenUrl = '';
    //     return;
    //   }
    //   window.console.log("tabService.currentTab$.subscribe() タブ切り替え");
    //   // タブ情報が存在する場合、タブ情報を表示する。
    //   this.currentScreenUrl = currentTab.screenUrl;
    //   this.changeTab(currentTab.screenUrl);
    // })

    tabService.tabs$.subscribe(tabInfo => {
      if (!tabInfo) {
        return;
      }
      this.tabs = tabInfo.tabs;
      let currentTab = tabInfo.currentTab;
      this.currentTab = currentTab;
      if (Object.keys(currentTab).length === 0) {
        // クリアボタン押下時はタブ情報が存在しないので、固定でクリアする
        this.currentScreenUrl = '';
        return;
      }
      window.console.log("tabService.currentTab$.subscribe() タブ切り替え");
      // タブ情報が存在する場合、タブ情報を表示する。
      this.currentScreenUrl = currentTab.screenUrl;
      this.changeTab(currentTab.screenUrl);
    });
    

  }

  onClickTab(tabId: string) {
    window.console.log("onClickTab() タブが押された " + tabId);
    this.changeTab(tabId);
  }

  // タブ押下時
  changeTab(tabId: string) {
    let tab: Az101Tab = this.tabService.getTab(tabId);
    // タブを選択状態にする
    this.currentScreenUrl = tab.screenUrl;
    // 画面情報を保存キャッシュ
    // this.commonComponent.keep();
    window.console.log(this.commonComponent);
    window.console.log('changeTab() navigate ' + tabId);
    // ルーティング
    this.router.navigate([tab.screenUrl])
  }

  // 照会ボタン押下時
  onClickRefer() {
    // タブが表示されている場合、タブをすべて削除し、タブを表示する。
    // →タブクリアはサービスの中で実施。
    //  clear()を実施すると変更検知が走るため
    // this.tabService.clear();
    // this.tabService.addTab('aa201g01');
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
    this.tabService.clear();
    this.router.navigate(['/'])
  }

}
