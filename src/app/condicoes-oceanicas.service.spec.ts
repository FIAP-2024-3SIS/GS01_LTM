import { TestBed } from '@angular/core/testing';

import { CondicoesOceanicasService } from './condicoes-oceanicas.service';

describe('CondicoesOceanicasService', () => {
  let service: CondicoesOceanicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondicoesOceanicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
