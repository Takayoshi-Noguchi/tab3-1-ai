import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Az102CacheService {

  cache: any = {};
  keepFunc: any = {};

  save(tabId: string, data: any) {
    window.console.log('Az102CacheService save()' + tabId + ' ' + data);
    this.cache[tabId] = data;
  }

  get(tabId: string) {
    window.console.log('Az102CacheService get()' + tabId + ' ' + this.cache[tabId]);
    return this.cache[tabId];
  }

  registKeepFunc(tabId: string, keepFunc: any) {
    window.console.log('Az102CacheService registKeepFunc()' + tabId + ' ' + keepFunc);
    this.keepFunc[tabId] = keepFunc;
  }

  executeKeep(tabId: string) {
    let _keepFunc = this.keepFunc[tabId];
    if (_keepFunc) {
      window.console.log('Az102CacheService executeKeep()' + tabId);
      // _keepFunc.keep();
      _keepFunc();
    }
  }

  clear() {
    this.cache = {};
    this.keepFunc = {};
  }
}


