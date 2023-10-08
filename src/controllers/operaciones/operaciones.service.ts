import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOperacioneDto } from './dto/create-operacione.dto';
import { UpdateOperacioneDto } from './dto/update-operacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Operacione } from './entities/operacione.entity';
import { Repository } from 'typeorm';
import { Suscriptor } from 'src/suscriptores/entities/suscriptor.entity';

@Injectable()
export class OperacionesService {
  constructor(
    @InjectRepository(Operacione)
    private operacionesRepository: Repository<Operacione>,
    @InjectRepository(Suscriptor)
    private suscriptorRepository: Repository<Suscriptor>,
  ) {}

  async create(createOperacioneDto: CreateOperacioneDto) {
    try {
      const id_suscriptor = createOperacioneDto.fk_suscriptor.id_suscriptor;
      const suscrptorExist = await this.suscriptorRepository.findOne({
        where: { id_suscriptor },
      });

      const existeOperacion = await this.operacionesRepository.findOne({
        where: { suscriptor:createOperacioneDto.fk_suscriptor, nombre_operacion:createOperacioneDto.nombre_operacion, estatus:1 },
      });

      console.log('Operacion existente: ',existeOperacion);


      if (suscrptorExist != null)
        throw new HttpException(
          'Ya existe el nombre de la operación para su usuario.',
          HttpStatus.NOT_FOUND,
        );

      if (suscrptorExist == null)
        throw new HttpException(
          'No existe el suscriptor indicado',
          HttpStatus.NOT_FOUND,
        );
      const operacion = new Operacione();
      operacion.suscriptor = suscrptorExist;
      operacion.nombre_operacion = createOperacioneDto.nombre_operacion;
      this.operacionesRepository.create(operacion);
      return this.operacionesRepository.save(operacion);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  findAll() {
    return `This action returns all operaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} operacione`;
  }

  update(id: number, updateOperacioneDto: UpdateOperacioneDto) {
    return `This action updates a #${id} operacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} operacione`;
  }
}
