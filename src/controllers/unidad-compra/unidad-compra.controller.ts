import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadCompraService } from './unidad-compra.service';
import { CreateUnidadCompraDto } from './dto/create-unidad-compra.dto';
import { UpdateUnidadCompraDto } from './dto/update-unidad-compra.dto';

@Controller('unidad-compra')
export class UnidadCompraController {
  constructor(private readonly unidadCompraService: UnidadCompraService) {}

  @Post()
  create(@Body() createUnidadCompraDto: CreateUnidadCompraDto) {
    return this.unidadCompraService.create(createUnidadCompraDto);
  }

  @Get()
  findAll() {
    return this.unidadCompraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadCompraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnidadCompraDto: UpdateUnidadCompraDto) {
    return this.unidadCompraService.update(+id, updateUnidadCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadCompraService.remove(+id);
  }
}
