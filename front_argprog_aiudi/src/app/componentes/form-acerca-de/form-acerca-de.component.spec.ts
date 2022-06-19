import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcercaDeComponent } from './form-acerca-de.component';

describe('FormAcercaDeComponent', () => {
  let component: FormAcercaDeComponent;
  let fixture: ComponentFixture<FormAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
