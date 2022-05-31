import { TestBed } from '@angular/core/testing';

import { ExperiencialabService } from './experiencialab.service';

describe('ExperiencialabService', () => {
  let service: ExperiencialabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperiencialabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
