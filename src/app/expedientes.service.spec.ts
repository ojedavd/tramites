import { TestBed, inject } from '@angular/core/testing';

import { ExpedientesService } from './expedientes.service';

describe('ExpedientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpedientesService]
    });
  });

  it('should be created', inject([ExpedientesService], (service: ExpedientesService) => {
    expect(service).toBeTruthy();
  }));
});
