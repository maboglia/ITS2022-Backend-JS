import { TestBed } from '@angular/core/testing';

import { ElencoService } from './elenco.service';

describe('ElencoService', () => {
  let service: ElencoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElencoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
