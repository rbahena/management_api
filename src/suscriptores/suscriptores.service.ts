import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSuscriptoreDto } from './dto/create-suscriptore.dto';
import { UpdateSuscriptoreDto } from './dto/update-suscriptore.dto';
import { Suscriptor } from './entities/suscriptor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class SuscriptoresService {
  constructor(
    @InjectRepository(Suscriptor)
    private suscriptorRepository: Repository<Suscriptor>,
  ) {}

  async create(createSuscriptoreDto: CreateSuscriptoreDto) {
    try {
      const newSuscriptor =
        this.suscriptorRepository.create(createSuscriptoreDto);
      return this.suscriptorRepository.save(newSuscriptor);
    } catch (error) {
      throw new ExceptionsHandler(error);
    }
  }

  findAll() {
    return this.suscriptorRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number) {
    const suscriptor = await this.suscriptorRepository.findOne({
      where: { id_suscriptor: id },
      relations: ['usuario'],
    });
    if (!suscriptor)
      throw new HttpException(
        'No se encontró la información solicitada',
        HttpStatus.NOT_FOUND,
      );
    return this.suscriptorRepository.findOne({
      where: { id_suscriptor: id },
      relations: ['usuario'],
    });
  }

  async update(id: number, updateSuscriptoreDto: UpdateSuscriptoreDto) {
    const suscriptor = await this.suscriptorRepository.findOne({
      where: { id_suscriptor: id, estatus: 1 },
    });
    console.log(suscriptor);
    if (!suscriptor) throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);;
    return this.suscriptorRepository.update({ id_suscriptor: id }, updateSuscriptoreDto);
  }

  remove(id: number) {
    return `This action removes a #${id} suscriptore`;
  }
}
