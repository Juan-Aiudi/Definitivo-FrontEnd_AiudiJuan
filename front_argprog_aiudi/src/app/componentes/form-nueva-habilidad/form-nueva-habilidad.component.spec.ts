import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevaHabilidadComponent } from './form-nueva-habilidad.component';

describe('FormNuevaHabilidadComponent', () => {
  let component: FormNuevaHabilidadComponent;
  let fixture: ComponentFixture<FormNuevaHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevaHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevaHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
