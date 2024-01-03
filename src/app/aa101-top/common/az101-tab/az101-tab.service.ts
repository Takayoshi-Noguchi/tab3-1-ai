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
      screenUrl: 'aa201g01',
      name: '契約情報照会'
    },
    'aa202g01' : {
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
    this.addTab('aa201g01');
    this.tabSubject.next(this.tabs);
  }

  /**
   * 指定したタブIDの情報をカレントタブ情報に追加する
   * @param tabId 
   */
  addTab(tabId: string) {
    // let tab = this.tabsOriginal.filter(data => data.screenUrl === tabId);
    let currentTab: Az101Tab = this.tabsOriginal[tabId];
    this.tabs.push(currentTab);
    this.tabSubject.next(this.tabs);
    this.currentTabSubject.next(currentTab);
    console.log(this.tabs);
  }

  getTab(tabId: string): Az101Tab {
    return this.tabsOriginal[tabId];
  }

}


