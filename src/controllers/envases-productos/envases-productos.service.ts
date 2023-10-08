import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEnvasesProductoDto } from './dto/create-envases-producto.dto';
import { UpdateEnvasesProductoDto } from './dto/update-envases-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { Repository } from 'typeorm';
import { EnvasesProducto } from './entities/envases-producto.entity';

@Injectable()
export class EnvasesProductosService {
  constructor(
    @InjectRepository(Operacione)
    private operacionesRepository: Repository<Operacione>,
    @InjectRepository(EnvasesProducto)
    private envasesRepository: Repository<EnvasesProducto>,
  ) {}

  async create(createEnvasesProductoDto: CreateEnvasesProductoDto) {
    try {
      const id_operacion = createEnvasesProductoDto.fk_operacion.id_operacion_usuario;
      const existeOperacion = await this.operacionesRepository.findOne({
        where: { id_operacion_usuario: id_operacion, estatus:1 },
      });

      if(existeOperacion == null){
        throw new HttpException(
          'No existe la operación del usuario',
          HttpStatus.NOT_FOUND)
      }

      const existeEnvase = await this.envasesRepository.findOne({
        where:{nombre_envase:createEnvasesProductoDto.nombre_envase, operacione:createEnvasesProductoDto.fk_operacion, estatus:1}
      });

      if(existeEnvase != null){
        throw new HttpException(
          'Ya existe el envase',
          HttpStatus.NOT_FOUND)
      }
      
      
      const nuevoEnvase = new EnvasesProducto();
      nuevoEnvase.operacione = existeOperacion;
      nuevoEnvase.nombre_envase = createEnvasesProductoDto.nombre_envase;
      
    
      this.envasesRepository.create(nuevoEnvase);
      return this.envasesRepository.save(nuevoEnvase);
        
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
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
