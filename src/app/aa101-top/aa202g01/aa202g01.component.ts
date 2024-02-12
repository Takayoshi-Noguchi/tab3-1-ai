import { Component } from '@angular/core';

import { CommonComponent } from '../common/az102-common/az102-common.component';

@Component({
  selector: 'app-aa202g01',
  templateUrl: './aa202g01.component.html',
  styleUrls: ['./aa202g01.component.scss']
})
export class Aa202g01Component  extends CommonComponent {

  override keep() {
    let data = {
    };
    window.console.log('Aa202g01Component keep()')
    return data;
  }
}
