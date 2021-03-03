import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TehnikaComponent } from './tehnika.component';

describe('TehnikaComponent', () => {
  let component: TehnikaComponent;
  let fixture: ComponentFixture<TehnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TehnikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TehnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
