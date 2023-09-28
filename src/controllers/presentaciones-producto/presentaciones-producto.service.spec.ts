import { Test, TestingModule } from '@nestjs/testing';
import { PresentacionesProductoService } from './presentaciones-producto.service';

describe('PresentacionesProductoService', () => {
  let service: PresentacionesProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresentacionesProductoService],
    }).compile();

    service = module.get<PresentacionesProductoService>(PresentacionesProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
