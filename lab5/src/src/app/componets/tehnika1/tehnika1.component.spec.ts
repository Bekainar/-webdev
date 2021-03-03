import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tehnika1Component } from './tehnika1.component';

describe('Tehnika1Component', () => {
  let component: Tehnika1Component;
  let fixture: ComponentFixture<Tehnika1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tehnika1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tehnika1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
