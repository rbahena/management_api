import { Injectable } from '@nestjs/common';
import { CreatePresentacionesProductoDto } from './dto/create-presentaciones-producto.dto';
import { UpdatePresentacionesProductoDto } from './dto/update-presentaciones-producto.dto';

@Injectable()
export class PresentacionesProductoService {
  create(createPresentacionesProductoDto: CreatePresentacionesProductoDto) {
    return 'This action adds a new presentacionesProducto';
  }

  findAll() {
    return `This action returns all presentacionesProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} presentacionesProducto`;
  }

  update(id: number, updatePresentacionesProductoDto: UpdatePresentacionesProductoDto) {
    return `This action updates a #${id} presentacionesProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} presentacionesProducto`;
  }
}
