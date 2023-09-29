import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadesMedidaProductoService } from './unidades-medida-producto.service';
import { CreateUnidadesMedidaProductoDto } from './dto/create-unidades-medida-producto.dto';
import { UpdateUnidadesMedidaProductoDto } from './dto/update-unidades-medida-producto.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('unidades-medida') // Add tag for swagger documentation
@Controller('unidades-medida-producto')
export class UnidadesMedidaProductoController {
  constructor(private readonly unidadesMedidaProductoService: UnidadesMedidaProductoService) {}

  @Post()
  create(@Body() createUnidadesMedidaProductoDto: CreateUnidadesMedidaProductoDto) {
    return this.unidadesMedidaProductoService.create(createUnidadesMedidaProductoDto);
  }

  @Get()
  findAll() {
    return this.unidadesMedidaProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadesMedidaProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnidadesMedidaProductoDto: UpdateUnidadesMedidaProductoDto) {
    return this.unidadesMedidaProductoService.update(+id, updateUnidadesMedidaProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadesMedidaProductoService.remove(+id);
  }
}
