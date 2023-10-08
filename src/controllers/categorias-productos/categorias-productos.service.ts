import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriasProductoDto } from './dto/create-categorias-producto.dto';
import { UpdateCategoriasProductoDto } from './dto/update-categorias-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { CategoriasProducto } from './entities/categorias-producto.entity';

@Injectable()
export class CategoriasProductosService {
  constructor(
    @InjectRepository(Operacione)
    private operacionesRepository: Repository<Operacione>,
    @InjectRepository(CategoriasProducto)
    private categoriasRepository: Repository<CategoriasProducto>,
  ) {}
  async create(createCategoriasProductoDto: CreateCategoriasProductoDto) {
    try {
      console.log(createCategoriasProductoDto);
      const id_operacion =
        createCategoriasProductoDto.fk_operacion.id_operacion_usuario;
      const existeOperacion = await this.operacionesRepository.findOne({
        where: { id_operacion_usuario: id_operacion, estatus:1 },
      });

      console.log(existeOperacion);
      if(existeOperacion == null){
        throw new HttpException(
          'No existe la operación del usuario',
          HttpStatus.NOT_FOUND)
      }

      const existeCategoria = await this.categoriasRepository.findOne({
        where:{nombre_categoria: createCategoriasProductoDto.nombre_categoria, operacione:createCategoriasProductoDto.fk_operacion}
      });

      if(existeCategoria != null){
        throw new HttpException(
          'Ya existe la categoria',
          HttpStatus.NOT_FOUND)
      }

      const categoria = new CategoriasProducto();
      categoria.operacione = existeOperacion;
      categoria.nombre_categoria = createCategoriasProductoDto.nombre_categoria;
      this.categoriasRepository.create(categoria);
      return this.categoriasRepository.save(categoria);




    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
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
