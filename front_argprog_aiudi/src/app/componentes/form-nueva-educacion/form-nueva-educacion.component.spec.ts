import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevaEducacionComponent } from './form-nueva-educacion.component';

describe('FormNuevaEducacionComponent', () => {
  let component: FormNuevaEducacionComponent;
  let fixture: ComponentFixture<FormNuevaEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevaEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevaEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
