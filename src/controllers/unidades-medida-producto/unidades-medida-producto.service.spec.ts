import { Test, TestingModule } from '@nestjs/testing';
import { UnidadesMedidaProductoService } from './unidades-medida-producto.service';

describe('UnidadesMedidaProductoService', () => {
  let service: UnidadesMedidaProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadesMedidaProductoService],
    }).compile();

    service = module.get<UnidadesMedidaProductoService>(UnidadesMedidaProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
