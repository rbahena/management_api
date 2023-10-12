import { Test, TestingModule } from '@nestjs/testing';
import { PlanesPagoController } from './planes-pago.controller';

describe('PlanesPagoController', () => {
  let controller: PlanesPagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanesPagoController],
    }).compile();

    controller = module.get<PlanesPagoController>(PlanesPagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
