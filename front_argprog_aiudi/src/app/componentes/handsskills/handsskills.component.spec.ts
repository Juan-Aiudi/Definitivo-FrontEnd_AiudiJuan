import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsskillsComponent } from './handsskills.component';

describe('HandsskillsComponent', () => {
  let component: HandsskillsComponent;
  let fixture: ComponentFixture<HandsskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandsskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandsskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
