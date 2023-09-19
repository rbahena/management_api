import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestDbconnectionService } from './test-dbconnection.service';
import { CreateTestDbconnectionDto } from './dto/create-test-dbconnection.dto';
import { UpdateTestDbconnectionDto } from './dto/update-test-dbconnection.dto';

@Controller('test-dbconnection')
export class TestDbconnectionController {
  constructor(private readonly testDbconnectionService: TestDbconnectionService) {}

  @Post()
  create(@Body() createTestDbconnectionDto: CreateTestDbconnectionDto) {
    return this.testDbconnectionService.create(createTestDbconnectionDto);
  }

  @Get()
  findAll() {
    return this.testDbconnectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testDbconnectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDbconnectionDto: UpdateTestDbconnectionDto) {
    return this.testDbconnectionService.update(+id, updateTestDbconnectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testDbconnectionService.remove(+id);
  }
}
