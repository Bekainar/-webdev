import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Odezhda4Component } from './odezhda4.component';

describe('Odezhda4Component', () => {
  let component: Odezhda4Component;
  let fixture: ComponentFixture<Odezhda4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Odezhda4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Odezhda4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
