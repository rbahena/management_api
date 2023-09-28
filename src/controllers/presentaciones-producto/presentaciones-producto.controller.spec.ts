import { Test, TestingModule } from '@nestjs/testing';
import { PresentacionesProductoController } from './presentaciones-producto.controller';
import { PresentacionesProductoService } from './presentaciones-producto.service';

describe('PresentacionesProductoController', () => {
  let controller: PresentacionesProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresentacionesProductoController],
      providers: [PresentacionesProductoService],
    }).compile();

    controller = module.get<PresentacionesProductoController>(PresentacionesProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
