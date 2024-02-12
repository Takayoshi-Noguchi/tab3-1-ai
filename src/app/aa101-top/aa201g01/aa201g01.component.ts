import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Az101TabService } from '../common/az101-tab/az101-tab.service';
import { CommonComponent } from '../common/az102-common/az102-common.component';

@Component({
  selector: 'app-aa201g01',
  templateUrl: './aa201g01.component.html',
  styleUrls: ['./aa201g01.component.scss']
})
export class Aa201g01Component extends CommonComponent {

  searchForm = this.fb.group({
    referNo: ['']
  })

  onClickAa202g01() {
    window.console.log('onClickAa202g01()');
    this.tabService.addTab('aa202g01');
  }

  override keep() {
    let data = {
      inputForm: this.searchForm,
    };
    window.console.log('Aa201g01Component keep()')
    return data;
  }

  constructor(
    private tabService: Az101TabService,
    private fb: FormBuilder) { 
      super();
    }
}
