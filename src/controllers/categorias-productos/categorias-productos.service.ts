import { Injectable } from '@nestjs/common';
import { CreateCategoriasProductoDto } from './dto/create-categorias-producto.dto';
import { UpdateCategoriasProductoDto } from './dto/update-categorias-producto.dto';

@Injectable()
export class CategoriasProductosService {
  create(createCategoriasProductoDto: CreateCategoriasProductoDto) {
    return 'This action adds a new categoriasProducto';
  }

  findAll() {
    return `This action returns all categoriasProductos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriasProducto`;
  }

  update(id: number, updateCategoriasProductoDto: UpdateCategoriasProductoDto) {
    return `This action updates a #${id} categoriasProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriasProducto`;
  }
}
