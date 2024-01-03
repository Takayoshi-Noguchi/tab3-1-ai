import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Az101Tab } from './az101-tab';

@Injectable({
  providedIn: 'root'
})
export class Az101TabService {

  tabsOriginal: { [key: string]: Az101Tab } = {
    'aa201g01' : {
      tabId: 'aa201g01',
      screenUrl: 'aa201g01',
      name: '契約情報照会'
    },
    'aa202g01' : {
      tabId: 'aa202g01',
      screenUrl: 'aa202g01',
      name: '商品情報'
    },
  };

  tabs: Az101Tab[] = [];

  private tabSubject = new BehaviorSubject<any>(null);
  tabs$ = this.tabSubject.asObservable();

  private currentTabSubject = new BehaviorSubject<any>(null);
  currentTab$ = this.currentTabSubject.asObservable();
  
  constructor(private router: Router) {
    // this.tabSubject.next(this.tabs);
    this.clear();
  }

  /**
   * 指定したタブIDの情報をカレントタブ情報に追加する
   * タブ情報が追加されたことを通知する
   * @param tabId 
   */
  addTab(tabId: string) {

    // 指定したタブの定義情報を取得
    let currentTab: Az101Tab = this.tabsOriginal[tabId];

    // タブが存在しない場合、タブ情報を追加し、通知する
    if (this.existTab(tabId) === false) {
      this.tabs.push(currentTab);
      this.tabSubject.next(this.tabs);
    }
    // 現在のタブ情報を通知する
    this.currentTabSubject.next(currentTab);
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
    return this.tabsOriginal[tabId];
  }

  clear() {
    this.tabs = [];
    this.tabSubject.next(this.tabs);
    this.currentTabSubject.next({});
  }
}


