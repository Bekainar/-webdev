import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Odezhda5Component } from './odezhda5.component';

describe('Odezhda5Component', () => {
  let component: Odezhda5Component;
  let fixture: ComponentFixture<Odezhda5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Odezhda5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Odezhda5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
