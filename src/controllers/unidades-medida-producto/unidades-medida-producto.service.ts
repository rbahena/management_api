import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUnidadesMedidaProductoDto } from './dto/create-unidades-medida-producto.dto';
import { UpdateUnidadesMedidaProductoDto } from './dto/update-unidades-medida-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { UnidadesMedidaProducto } from './entities/unidades-medida-producto.entity';

@Injectable()
export class UnidadesMedidaProductoService {
  constructor(
    @InjectRepository(Operacione)
    private operacionesRepository: Repository<Operacione>,
    @InjectRepository(UnidadesMedidaProducto)
    private unidadMedidaRepository: Repository<UnidadesMedidaProducto>,
  ) {}

  async create(
    createUnidadesMedidaProductoDto: CreateUnidadesMedidaProductoDto,
  ) {
    try {
      const id_operacion =
        createUnidadesMedidaProductoDto.fk_operacion.id_operacion_usuario;
      const existeOperacion = await this.operacionesRepository.findOne({
        where: { id_operacion_usuario: id_operacion, estatus: 1 },
      });

      if (existeOperacion == null) {
        throw new HttpException(
          'No existe la operación del usuario',
          HttpStatus.NOT_FOUND,
        );
      }

      const existeUnidadMedia = await this.unidadMedidaRepository.findOne({
        where: {
          nombre_unidad: createUnidadesMedidaProductoDto.nombre_unidad,
          operacione: createUnidadesMedidaProductoDto.fk_operacion,
          estatus: 1,
        },
      });

      if (existeUnidadMedia != null) {
        throw new HttpException(
          'Ya existe la unidad de medida',
          HttpStatus.NOT_FOUND,
        );
      }

      const nuevaUnidad = new UnidadesMedidaProducto();
      nuevaUnidad.operacione = existeOperacion;
      nuevaUnidad.nombre_unidad = createUnidadesMedidaProductoDto.nombre_unidad;
      nuevaUnidad.siglas_unidad = createUnidadesMedidaProductoDto.siglas_unidad;
      this.unidadMedidaRepository.create(nuevaUnidad);
      return this.unidadMedidaRepository.save(nuevaUnidad);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  findAll() {
    return `This action returns all unidadesMedidaProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unidadesMedidaProducto`;
  }

  update(
    id: number,
    updateUnidadesMedidaProductoDto: UpdateUnidadesMedidaProductoDto,
  ) {
    return `This action updates a #${id} unidadesMedidaProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} unidadesMedidaProducto`;
  }
}
