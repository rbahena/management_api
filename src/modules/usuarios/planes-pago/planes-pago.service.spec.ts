import { Test, TestingModule } from '@nestjs/testing';
import { PlanesPagoService } from './planes-pago.service';

describe('PlanesPagoService', () => {
  let service: PlanesPagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanesPagoService],
    }).compile();

    service = module.get<PlanesPagoService>(PlanesPagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
