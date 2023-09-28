import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnvasesProductosService } from './envases-productos.service';
import { CreateEnvasesProductoDto } from './dto/create-envases-producto.dto';
import { UpdateEnvasesProductoDto } from './dto/update-envases-producto.dto';

@Controller('envases-productos')
export class EnvasesProductosController {
  constructor(private readonly envasesProductosService: EnvasesProductosService) {}

  @Post()
  create(@Body() createEnvasesProductoDto: CreateEnvasesProductoDto) {
    return this.envasesProductosService.create(createEnvasesProductoDto);
  }

  @Get()
  findAll() {
    return this.envasesProductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.envasesProductosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnvasesProductoDto: UpdateEnvasesProductoDto) {
    return this.envasesProductosService.update(+id, updateEnvasesProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.envasesProductosService.remove(+id);
  }
}
