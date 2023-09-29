import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { CategoriasProductosService } from './categorias-productos.service';
import { CreateCategoriasProductoDto } from './dto/create-categorias-producto.dto';
import { UpdateCategoriasProductoDto } from './dto/update-categorias-producto.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoggerInterceptor } from 'src/core/interceptors/logger/logger.interceptor';


@ApiTags('categorias') // Add tag for swagger documentation
@UseInterceptors(LoggerInterceptor) // Add loggerInterceptor
@Controller('categorias-productos')
export class CategoriasProductosController {
  constructor(private readonly categoriasProductosService: CategoriasProductosService) {}

  @Post()
  create(@Body() createCategoriasProductoDto: CreateCategoriasProductoDto) {
    return this.categoriasProductosService.create(createCategoriasProductoDto);
  }

  @Get()
  findAll() {
    return this.categoriasProductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasProductosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriasProductoDto: UpdateCategoriasProductoDto) {
    return this.categoriasProductosService.update(+id, updateCategoriasProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasProductosService.remove(+id);
  }
}
