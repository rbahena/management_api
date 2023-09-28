import { Injectable } from '@nestjs/common';
import { CreateEnvasesProductoDto } from './dto/create-envases-producto.dto';
import { UpdateEnvasesProductoDto } from './dto/update-envases-producto.dto';

@Injectable()
export class EnvasesProductosService {
  create(createEnvasesProductoDto: CreateEnvasesProductoDto) {
    return 'This action adds a new envasesProducto';
  }

  findAll() {
    return `This action returns all envasesProductos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} envasesProducto`;
  }

  update(id: number, updateEnvasesProductoDto: UpdateEnvasesProductoDto) {
    return `This action updates a #${id} envasesProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} envasesProducto`;
  }
}
