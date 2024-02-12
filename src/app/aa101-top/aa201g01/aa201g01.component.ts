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
    let customerNo = this.cacheService.get('aa201g01');
    console.log(customerNo);
    if (customerNo) {
      this.aa201g01Form.setValue({customerNo: customerNo})
    }
  }

  onClickAa202g01() {
    window.console.log('onClickAa202g01()');
    // 入力情報を保存
    this.cacheService.save('aa201g01', this.aa201g01Form.get('customerNo')?.value);
    this.tabService.addTab('aa202g01');
  }

  constructor(
    private tabService: Az101TabService,
    private fb: FormBuilder,
    private cacheService: Az102CacheService) { }

}
