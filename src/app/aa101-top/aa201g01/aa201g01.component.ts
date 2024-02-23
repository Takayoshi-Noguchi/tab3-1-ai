import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Az101TabService } from '../common/az101-tab/az101-tab.service';
import { Az102CacheService } from '../common/az102-cache/az102-cache.service';

@Component({
  selector: 'app-aa201g01',
  templateUrl: './aa201g01.component.html',
  styleUrls: ['./aa201g01.component.scss']
})
export class Aa201g01Component implements OnInit{

  aa201g01Form = this.fb.group({
    customerNo: ['']
  })

  ngOnInit(): void {
    // 画面情報の復元
    let aa201g01FormValue = this.cacheService.get('aa201g01');
    console.log(aa201g01FormValue);
    if (aa201g01FormValue) {
      this.aa201g01Form.patchValue(aa201g01FormValue)
    }
  }

  onClickAa202g01() {
    window.console.log('onClickAa202g01()');
    // 入力情報を保存
    // this.cacheService.save('aa201g01', this.aa201g01Form.get('customerNo')?.value);
    // this.cacheService.save('aa201g01', this.aa201g01Form.value);
    this.keep();
    this.tabService.addTab('aa202g01');
  }

  // 画面情報の保存　TOP画面から呼ばれる
  keep() {
    window.console.log('aa201g01 keep()');
    // TODO 自身のコンポーネントがないはずがない
    if (this) {
      this.cacheService.save('aa201g01', this.aa201g01Form.value);
    }
  }

  constructor(
    private tabService: Az101TabService,
    private fb: FormBuilder,
    private cacheService: Az102CacheService) {
    
    window.console.log('aa201g01 constructor()');
    cacheService.registKeepFunc('aa201g01', this.keep);

    // キャッシュ通知を受け取って保存する
    cacheService.keepNotification$.subscribe(tabId => {
      window.console.log('aa201g01 keepNotification受信');
      if (tabId === 'aa201g01') {
        this.keep();
      }
    });
  }
  
  ngOnDestroy() {
    window.console.log('aa201g01 ngOnDestroy()');
  }

}
