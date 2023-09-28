import { Test, TestingModule } from '@nestjs/testing';
import { UnidadesMedidaProductoController } from './unidades-medida-producto.controller';
import { UnidadesMedidaProductoService } from './unidades-medida-producto.service';

describe('UnidadesMedidaProductoController', () => {
  let controller: UnidadesMedidaProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnidadesMedidaProductoController],
      providers: [UnidadesMedidaProductoService],
    }).compile();

    controller = module.get<UnidadesMedidaProductoController>(UnidadesMedidaProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
