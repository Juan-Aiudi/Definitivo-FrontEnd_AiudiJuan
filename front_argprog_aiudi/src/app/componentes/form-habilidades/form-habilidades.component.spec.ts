import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHabilidadesComponent } from './form-habilidades.component';

describe('FormHabilidadesComponent', () => {
  let component: FormHabilidadesComponent;
  let fixture: ComponentFixture<FormHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
