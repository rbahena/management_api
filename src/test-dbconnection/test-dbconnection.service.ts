import { Injectable } from '@nestjs/common';
import { CreateTestDbconnectionDto } from './dto/create-test-dbconnection.dto';
import { UpdateTestDbconnectionDto } from './dto/update-test-dbconnection.dto';

@Injectable()
export class TestDbconnectionService {
  create(createTestDbconnectionDto: CreateTestDbconnectionDto) {
    return 'This action adds a new testDbconnection';
  }

  findAll() {
    return `This action returns all testDbconnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testDbconnection`;
  }

  update(id: number, updateTestDbconnectionDto: UpdateTestDbconnectionDto) {
    return `This action updates a #${id} testDbconnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} testDbconnection`;
  }
}
