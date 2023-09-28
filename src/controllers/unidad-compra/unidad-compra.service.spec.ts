import { Test, TestingModule } from '@nestjs/testing';
import { UnidadCompraService } from './unidad-compra.service';

describe('UnidadCompraService', () => {
  let service: UnidadCompraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadCompraService],
    }).compile();

    service = module.get<UnidadCompraService>(UnidadCompraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
