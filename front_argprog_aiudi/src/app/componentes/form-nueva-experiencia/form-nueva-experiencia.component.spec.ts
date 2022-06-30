import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevaExperienciaComponent } from './form-nueva-experiencia.component';

describe('FormNuevaExperienciaComponent', () => {
  let component: FormNuevaExperienciaComponent;
  let fixture: ComponentFixture<FormNuevaExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevaExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
