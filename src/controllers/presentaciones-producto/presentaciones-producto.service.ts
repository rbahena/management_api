import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePresentacionesProductoDto } from './dto/create-presentaciones-producto.dto';
import { UpdatePresentacionesProductoDto } from './dto/update-presentaciones-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { PresentacionesProducto } from './entities/presentaciones-producto.entity';

@Injectable()
export class PresentacionesProductoService {

  constructor(
    @InjectRepository(Operacione)
    private operacionesRepository: Repository<Operacione>,
    @InjectRepository(PresentacionesProducto)
    private presentacionesRepository: Repository<PresentacionesProducto>,
  ) {}
  
  async create(createPresentacionesProductoDto: CreatePresentacionesProductoDto) {
    try {
      const id_operacion =
      createPresentacionesProductoDto.fk_operacion.id_operacion_usuario;
    const existeOperacion = await this.operacionesRepository.findOne({
      where: { id_operacion_usuario: id_operacion, estatus: 1 },
    });

    if (existeOperacion == null) {
      throw new HttpException(
        'No existe la operación del usuario',
        HttpStatus.NOT_FOUND,
      );
    }

    const existePresentacion = await this.presentacionesRepository.findOne({
      where: {
        nombre_presentacion : createPresentacionesProductoDto.nombre_presentacion,
        operacione: createPresentacionesProductoDto.fk_operacion,
        estatus: 1,
      },
    });

    if (existePresentacion != null) {
      throw new HttpException('Ya existe la categoria', HttpStatus.NOT_FOUND);
    }

    const nuevaPresentacion = new PresentacionesProducto();
    nuevaPresentacion.operacione = existeOperacion;
    nuevaPresentacion.nombre_presentacion = createPresentacionesProductoDto.nombre_presentacion;
    this.presentacionesRepository.create(nuevaPresentacion);
    return this.presentacionesRepository.save(nuevaPresentacion);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
      
    }
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
