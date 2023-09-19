import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { TestDbconnectionService } from './test-dbconnection.service';
import { CreateTestDbconnectionDto } from './dto/create-test-dbconnection.dto';
import { UpdateTestDbconnectionDto } from './dto/update-test-dbconnection.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/core/work-media/media.handle';

@Controller('test-dbconnection')
export class TestDbconnectionController {
  constructor(private readonly testDbconnectionService: TestDbconnectionService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {storage}))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

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
  update(
    @Param('id') id: string,
    @Body() updateTestDbconnectionDto: UpdateTestDbconnectionDto,
  ) {
    return this.testDbconnectionService.update(+id, updateTestDbconnectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testDbconnectionService.remove(+id);
  }
}
