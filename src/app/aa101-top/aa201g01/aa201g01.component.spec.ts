import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa201g01Component } from './aa201g01.component';

describe('Aa201g01Component', () => {
  let component: Aa201g01Component;
  let fixture: ComponentFixture<Aa201g01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aa201g01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aa201g01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
