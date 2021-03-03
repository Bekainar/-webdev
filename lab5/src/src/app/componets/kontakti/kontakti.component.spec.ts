import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktiComponent } from './kontakti.component';

describe('KontaktiComponent', () => {
  let component: KontaktiComponent;
  let fixture: ComponentFixture<KontaktiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
