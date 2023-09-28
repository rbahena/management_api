import { Test, TestingModule } from '@nestjs/testing';
import { EnvasesProductosService } from './envases-productos.service';

describe('EnvasesProductosService', () => {
  let service: EnvasesProductosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvasesProductosService],
    }).compile();

    service = module.get<EnvasesProductosService>(EnvasesProductosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
