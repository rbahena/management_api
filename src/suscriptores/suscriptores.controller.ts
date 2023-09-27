import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { SuscriptoresService } from './suscriptores.service';
import { CreateSuscriptoreDto } from './dto/create-suscriptore.dto';
import { UpdateSuscriptoreDto } from './dto/update-suscriptore.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoggerInterceptor } from 'src/core/interceptors/logger/logger.interceptor';


@ApiTags('suscriptores') // Add tag for swagger documentation
@UseInterceptors(LoggerInterceptor) // Add loggerInterceptor
@Controller('suscriptores')
export class SuscriptoresController {
  constructor(private readonly suscriptoresService: SuscriptoresService) {}

  @Post('createSuscriptor')
  create(@Body() createSuscriptoreDto: CreateSuscriptoreDto) {
    return this.suscriptoresService.create(createSuscriptoreDto);
  }

  @Get('getAllSuscriptors')
  findAll() {
    return this.suscriptoresService.findAll();
  }

  @Get('getSuscriptor/:id')
  findOne(@Param('id') id: string) {
    return this.suscriptoresService.findOne(+id);
  }

  @Patch('updateSuscriptor/:id')
  update(@Param('id') id: string, @Body() updateSuscriptoreDto: UpdateSuscriptoreDto) {
    return this.suscriptoresService.update(+id, updateSuscriptoreDto);
  }

  @Delete('deleteSuscriptor/:id')
  remove(@Param('id') id: string) {
    return this.suscriptoresService.remove(+id);
  }
}
