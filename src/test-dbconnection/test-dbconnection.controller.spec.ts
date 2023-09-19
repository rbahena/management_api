import { Test, TestingModule } from '@nestjs/testing';
import { TestDbconnectionController } from './test-dbconnection.controller';
import { TestDbconnectionService } from './test-dbconnection.service';

describe('TestDbconnectionController', () => {
  let controller: TestDbconnectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestDbconnectionController],
      providers: [TestDbconnectionService],
    }).compile();

    controller = module.get<TestDbconnectionController>(TestDbconnectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
