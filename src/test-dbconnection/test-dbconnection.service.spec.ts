import { Test, TestingModule } from '@nestjs/testing';
import { TestDbconnectionService } from './test-dbconnection.service';

describe('TestDbconnectionService', () => {
  let service: TestDbconnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestDbconnectionService],
    }).compile();

    service = module.get<TestDbconnectionService>(TestDbconnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
