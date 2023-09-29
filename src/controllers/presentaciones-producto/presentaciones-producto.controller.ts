import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PresentacionesProductoService } from './presentaciones-producto.service';
import { CreatePresentacionesProductoDto } from './dto/create-presentaciones-producto.dto';
import { UpdatePresentacionesProductoDto } from './dto/update-presentaciones-producto.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('presentaciones_producto') // Add tag for swagger documentation
@Controller('presentaciones-producto')
export class PresentacionesProductoController {
  constructor(private readonly presentacionesProductoService: PresentacionesProductoService) {}

  @Post()
  create(@Body() createPresentacionesProductoDto: CreatePresentacionesProductoDto) {
    return this.presentacionesProductoService.create(createPresentacionesProductoDto);
  }

  @Get()
  findAll() {
    return this.presentacionesProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presentacionesProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresentacionesProductoDto: UpdatePresentacionesProductoDto) {
    return this.presentacionesProductoService.update(+id, updatePresentacionesProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presentacionesProductoService.remove(+id);
  }
}
