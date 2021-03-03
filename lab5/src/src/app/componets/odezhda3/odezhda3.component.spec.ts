import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Odezhda3Component } from './odezhda3.component';

describe('Odezhda3Component', () => {
  let component: Odezhda3Component;
  let fixture: ComponentFixture<Odezhda3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Odezhda3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Odezhda3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
