import { Injectable } from '@nestjs/common';
import { CreateRelTipoCompraProductoProveedorDto } from './dto/create-rel_tipo_compra_producto_proveedor.dto';
import { UpdateRelTipoCompraProductoProveedorDto } from './dto/update-rel_tipo_compra_producto_proveedor.dto';

@Injectable()
export class RelTipoCompraProductoProveedorService {
  create(createRelTipoCompraProductoProveedorDto: CreateRelTipoCompraProductoProveedorDto) {
    return 'This action adds a new relTipoCompraProductoProveedor';
  }

  findAll() {
    return `This action returns all relTipoCompraProductoProveedor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relTipoCompraProductoProveedor`;
  }

  update(id: number, updateRelTipoCompraProductoProveedorDto: UpdateRelTipoCompraProductoProveedorDto) {
    return `This action updates a #${id} relTipoCompraProductoProveedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} relTipoCompraProductoProveedor`;
  }
}
