import { TestBed } from '@angular/core/testing';

import { ServicioFormularioService } from './servicio-formulario.service';

describe('ServicioFormularioService', () => {
  let service: ServicioFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
