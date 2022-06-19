import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoAcDeComponent } from './form-nuevo-ac-de.component';

describe('FormNuevoAcDeComponent', () => {
  let component: FormNuevoAcDeComponent;
  let fixture: ComponentFixture<FormNuevoAcDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevoAcDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoAcDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
