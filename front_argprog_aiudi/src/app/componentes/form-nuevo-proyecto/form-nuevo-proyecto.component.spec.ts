import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoProyectoComponent } from './form-nuevo-proyecto.component';

describe('FormNuevoProyectoComponent', () => {
  let component: FormNuevoProyectoComponent;
  let fixture: ComponentFixture<FormNuevoProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevoProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
