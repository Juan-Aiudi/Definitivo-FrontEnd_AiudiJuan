import { TestBed } from '@angular/core/testing';

import { HeaderyfooterService } from './headeryfooter.service';

describe('HeaderyfooterService', () => {
  let service: HeaderyfooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderyfooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
