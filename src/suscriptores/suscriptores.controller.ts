import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuscriptoresService } from './suscriptores.service';
import { CreateSuscriptoreDto } from './dto/create-suscriptore.dto';
import { UpdateSuscriptoreDto } from './dto/update-suscriptore.dto';

@Controller('suscriptores')
export class SuscriptoresController {
  constructor(private readonly suscriptoresService: SuscriptoresService) {}

  @Post()
  create(@Body() createSuscriptoreDto: CreateSuscriptoreDto) {
    return this.suscriptoresService.create(createSuscriptoreDto);
  }

  @Get()
  findAll() {
    return this.suscriptoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suscriptoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuscriptoreDto: UpdateSuscriptoreDto) {
    return this.suscriptoresService.update(+id, updateSuscriptoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suscriptoresService.remove(+id);
  }
}
