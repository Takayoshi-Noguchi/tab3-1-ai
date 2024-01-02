import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa202g01Component } from './aa202g01.component';

describe('Aa202g01Component', () => {
  let component: Aa202g01Component;
  let fixture: ComponentFixture<Aa202g01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aa202g01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aa202g01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
