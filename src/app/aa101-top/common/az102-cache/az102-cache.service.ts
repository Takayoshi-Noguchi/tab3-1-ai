import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Az102CacheService {

  cache: any = {};

  save(tabId: string, data: any) {
    this.cache[tabId] = data;
  }

  get(tabId: string) {
    return this.cache[tabId];
  }
}


