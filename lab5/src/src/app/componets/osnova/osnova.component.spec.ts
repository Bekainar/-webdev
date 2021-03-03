import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsnovaComponent } from './osnova.component';

describe('OsnovaComponent', () => {
  let component: OsnovaComponent;
  let fixture: ComponentFixture<OsnovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsnovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsnovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
