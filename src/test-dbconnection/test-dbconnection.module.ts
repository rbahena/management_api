import { Module } from '@nestjs/common';
import { TestDbconnectionService } from './test-dbconnection.service';
import { TestDbconnectionController } from './test-dbconnection.controller';

@Module({
  controllers: [TestDbconnectionController],
  providers: [TestDbconnectionService],
})
export class TestDbconnectionModule {}
