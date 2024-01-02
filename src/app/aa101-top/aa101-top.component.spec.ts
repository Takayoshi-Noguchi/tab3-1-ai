import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa101TopComponent } from './aa101-top.component';

describe('Aa101TopComponent', () => {
  let component: Aa101TopComponent;
  let fixture: ComponentFixture<Aa101TopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aa101TopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aa101TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
