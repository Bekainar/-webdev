import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tehnika5Component } from './tehnika5.component';

describe('Tehnika5Component', () => {
  let component: Tehnika5Component;
  let fixture: ComponentFixture<Tehnika5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tehnika5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tehnika5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
