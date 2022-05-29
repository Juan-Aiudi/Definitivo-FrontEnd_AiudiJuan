import { TestBed } from '@angular/core/testing';

import { PersonaAcDeService } from './persona-ac-de.service';

describe('PersonaAcDeService', () => {
  let service: PersonaAcDeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaAcDeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
