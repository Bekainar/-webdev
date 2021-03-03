import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdezhdaComponent } from './odezhda.component';

describe('OdezhdaComponent', () => {
  let component: OdezhdaComponent;
  let fixture: ComponentFixture<OdezhdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdezhdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdezhdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
