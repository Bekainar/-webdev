import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tehnika4Component } from './tehnika4.component';

describe('Tehnika4Component', () => {
  let component: Tehnika4Component;
  let fixture: ComponentFixture<Tehnika4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tehnika4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tehnika4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
