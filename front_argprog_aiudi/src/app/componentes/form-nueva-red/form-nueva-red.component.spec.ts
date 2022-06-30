import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevaRedComponent } from './form-nueva-red.component';

describe('FormNuevaRedComponent', () => {
  let component: FormNuevaRedComponent;
  let fixture: ComponentFixture<FormNuevaRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevaRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevaRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
