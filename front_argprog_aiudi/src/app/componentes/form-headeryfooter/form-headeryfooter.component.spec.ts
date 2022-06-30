import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeaderyfooterComponent } from './form-headeryfooter.component';

describe('FormHeaderyfooterComponent', () => {
  let component: FormHeaderyfooterComponent;
  let fixture: ComponentFixture<FormHeaderyfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHeaderyfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHeaderyfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
