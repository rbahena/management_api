import { Test, TestingModule } from '@nestjs/testing';
import { EnvasesProductosController } from './envases-productos.controller';
import { EnvasesProductosService } from './envases-productos.service';

describe('EnvasesProductosController', () => {
  let controller: EnvasesProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvasesProductosController],
      providers: [EnvasesProductosService],
    }).compile();

    controller = module.get<EnvasesProductosController>(EnvasesProductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
