import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tehnika2Component } from './tehnika2.component';

describe('Tehnika2Component', () => {
  let component: Tehnika2Component;
  let fixture: ComponentFixture<Tehnika2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tehnika2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tehnika2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
