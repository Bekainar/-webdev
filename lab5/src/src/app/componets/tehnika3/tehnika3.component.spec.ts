import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tehnika3Component } from './tehnika3.component';

describe('Tehnika3Component', () => {
  let component: Tehnika3Component;
  let fixture: ComponentFixture<Tehnika3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tehnika3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tehnika3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
