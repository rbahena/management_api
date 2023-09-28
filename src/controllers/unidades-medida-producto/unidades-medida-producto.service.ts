import { Injectable } from '@nestjs/common';
import { CreateUnidadesMedidaProductoDto } from './dto/create-unidades-medida-producto.dto';
import { UpdateUnidadesMedidaProductoDto } from './dto/update-unidades-medida-producto.dto';

@Injectable()
export class UnidadesMedidaProductoService {
  create(createUnidadesMedidaProductoDto: CreateUnidadesMedidaProductoDto) {
    return 'This action adds a new unidadesMedidaProducto';
  }

  findAll() {
    return `This action returns all unidadesMedidaProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unidadesMedidaProducto`;
  }

  update(id: number, updateUnidadesMedidaProductoDto: UpdateUnidadesMedidaProductoDto) {
    return `This action updates a #${id} unidadesMedidaProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} unidadesMedidaProducto`;
  }
}
