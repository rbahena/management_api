import { Injectable } from '@nestjs/common';
import { CreateUnidadCompraDto } from './dto/create-unidad-compra.dto';
import { UpdateUnidadCompraDto } from './dto/update-unidad-compra.dto';

@Injectable()
export class UnidadCompraService {
  create(createUnidadCompraDto: CreateUnidadCompraDto) {
    return 'This action adds a new unidadCompra';
  }

  findAll() {
    return `This action returns all unidadCompra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unidadCompra`;
  }

  update(id: number, updateUnidadCompraDto: UpdateUnidadCompraDto) {
    return `This action updates a #${id} unidadCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} unidadCompra`;
  }
}
