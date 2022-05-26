import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosCardComponent } from './alumnos-card.component';

describe('AlumnosCardComponent', () => {
  let component: AlumnosCardComponent;
  let fixture: ComponentFixture<AlumnosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
