import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesController } from './operaciones.controller';
import { OperacionesService } from './operaciones.service';

describe('OperacionesController', () => {
  let controller: OperacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperacionesController],
      providers: [OperacionesService],
    }).compile();

    controller = module.get<OperacionesController>(OperacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
