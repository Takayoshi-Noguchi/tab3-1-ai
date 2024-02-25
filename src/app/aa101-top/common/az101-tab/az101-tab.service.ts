import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Az101Tab, az101TabBlank } from './az101-tab';
import { Az101TabConst } from './az101-tab-const';

@Injectable({
  providedIn: 'root'
})
export class Az101TabService {

  // タブ配列
  tabs: Az101Tab[] = [];
  // 選択されたタブID
  selectedTabId: string = '';

  private tabSubject = new BehaviorSubject<any>(null);
  tabs$ = this.tabSubject.asObservable();

  // private currentTabSubject = new BehaviorSubject<Az101Tab>(az101TabBlank);
  // currentTab$ = this.currentTabSubject.asObservable();
  
  constructor(private router: Router) {
    this.clear();
  }

  /**
   * 指定したタブIDの情報をカレントタブ情報に追加する
   * タブ情報が追加されたことを通知する
   * @param tabId 
   */
  addTab(tabId: string) {

    // 指定したタブの定義情報を取得
    let currentTab: Az101Tab = Az101TabConst.TAB_DEFINE[tabId];

    // タブが存在しない場合、タブ情報を追加し、通知する
    if (this.existTab(tabId) === false) {
      this.tabs.push(currentTab);
    }
    this.selectedTabId = tabId;
    // タブ変更を通知する
    this.notify();
  }

  // 指定したタブがすでに表示されているか判定する。
  existTab(tabId: string): boolean {
    let tab = this.tabs.filter(tab => tab.tabId === tabId);
    if (tab.length === 0) {
      return false;
    }
    return true;
  }
  
  getTab(tabId: string): Az101Tab {
    return Az101TabConst.TAB_DEFINE[tabId];
  }

  // タブ情報をクリアする
  clear() {
    this.tabs = [];
    this.selectedTabId = '';
    this.notify();
  }

  // TOP画面で照会ボタン押下
  openFirstTabs(tabIdArray: string[]) {
    // タブ情報をクリア
    this.tabs = [];
    // 表示対象のタブ情報を登録
    tabIdArray.forEach(tabId => {
      let tab: Az101Tab = Az101TabConst.TAB_DEFINE[tabId];
      this.tabs.push(tab);
    })
    this.selectedTabId = tabIdArray[0];
    // タブ情報を通知
    this.notify();
  }

  notify() {
    this.tabSubject.next({ tabId: this.selectedTabId, tabs: this.tabs });
  }
}


