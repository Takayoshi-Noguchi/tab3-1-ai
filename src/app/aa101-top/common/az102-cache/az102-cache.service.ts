import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Az102CacheService {

  cache: any = {};

  private keepNotificationSubject = new BehaviorSubject<any>(null);
  keepNotification$ = this.keepNotificationSubject.asObservable();


  save(tabId: string, data: any) {
    window.console.log('Az102CacheService save()' + tabId + ' ' + JSON.stringify(data));
    this.cache[tabId] = data;
  }

  get(tabId: string) {
    window.console.log('Az102CacheService get()' + tabId + ' ' + JSON.stringify(this.cache[tabId]));
    return this.cache[tabId];
  }

  executeKeep(tabId: string) {
    window.console.log('Az102CacheService executeKeep() tabId=' + tabId);
    this.keepNotificationSubject.next(tabId);
  }

  clear() {
    this.cache = {};
  }
}


