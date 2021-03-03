import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Odezhda2Component } from './odezhda2.component';

describe('Odezhda2Component', () => {
  let component: Odezhda2Component;
  let fixture: ComponentFixture<Odezhda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Odezhda2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Odezhda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
