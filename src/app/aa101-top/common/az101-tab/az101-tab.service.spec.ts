import { TestBed } from '@angular/core/testing';

import { Az101TabService } from './az101-tab.service';

describe('Az101TabService', () => {
  let service: Az101TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Az101TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
