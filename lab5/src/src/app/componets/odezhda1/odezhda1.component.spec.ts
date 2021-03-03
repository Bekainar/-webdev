import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Odezhda1Component } from './odezhda1.component';

describe('Odezhda1Component', () => {
  let component: Odezhda1Component;
  let fixture: ComponentFixture<Odezhda1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Odezhda1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Odezhda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
