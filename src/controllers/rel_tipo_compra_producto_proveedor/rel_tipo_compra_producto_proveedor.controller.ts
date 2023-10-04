import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelTipoCompraProductoProveedorService } from './rel_tipo_compra_producto_proveedor.service';
import { CreateRelTipoCompraProductoProveedorDto } from './dto/create-rel_tipo_compra_producto_proveedor.dto';
import { UpdateRelTipoCompraProductoProveedorDto } from './dto/update-rel_tipo_compra_producto_proveedor.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('rel-tipo-compra-producto-proveedor') // Add tag for swagger documentation
@Controller('rel-tipo-compra-producto-proveedor')
export class RelTipoCompraProductoProveedorController {
  constructor(private readonly relTipoCompraProductoProveedorService: RelTipoCompraProductoProveedorService) {}

  @Post()
  create(@Body() createRelTipoCompraProductoProveedorDto: CreateRelTipoCompraProductoProveedorDto) {
    return this.relTipoCompraProductoProveedorService.create(createRelTipoCompraProductoProveedorDto);
  }

  @Get()
  findAll() {
    return this.relTipoCompraProductoProveedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relTipoCompraProductoProveedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelTipoCompraProductoProveedorDto: UpdateRelTipoCompraProductoProveedorDto) {
    return this.relTipoCompraProductoProveedorService.update(+id, updateRelTipoCompraProductoProveedorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relTipoCompraProductoProveedorService.remove(+id);
  }
}
