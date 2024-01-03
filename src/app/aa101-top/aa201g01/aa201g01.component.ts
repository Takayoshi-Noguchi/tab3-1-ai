import { Component } from '@angular/core';

import { Az101TabService } from '../common/az101-tab/az101-tab.service';

@Component({
  selector: 'app-aa201g01',
  templateUrl: './aa201g01.component.html',
  styleUrls: ['./aa201g01.component.scss']
})
export class Aa201g01Component {

  constructor(private tabService: Az101TabService) {

  }

  onClickAa202g01() {
    window.console.log('onClickAa202g01()');
    this.tabService.addTab('aa202g01');
  }
}
