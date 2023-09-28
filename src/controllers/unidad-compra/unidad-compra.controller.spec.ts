import { Test, TestingModule } from '@nestjs/testing';
import { UnidadCompraController } from './unidad-compra.controller';
import { UnidadCompraService } from './unidad-compra.service';

describe('UnidadCompraController', () => {
  let controller: UnidadCompraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnidadCompraController],
      providers: [UnidadCompraService],
    }).compile();

    controller = module.get<UnidadCompraController>(UnidadCompraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
