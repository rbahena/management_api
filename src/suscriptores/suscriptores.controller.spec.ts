import { Test, TestingModule } from '@nestjs/testing';
import { SuscriptoresController } from './suscriptores.controller';
import { SuscriptoresService } from './suscriptores.service';

describe('SuscriptoresController', () => {
  let controller: SuscriptoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuscriptoresController],
      providers: [SuscriptoresService],
    }).compile();

    controller = module.get<SuscriptoresController>(SuscriptoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
