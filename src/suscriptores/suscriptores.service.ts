import { Injectable } from '@nestjs/common';
import { CreateSuscriptoreDto } from './dto/create-suscriptore.dto';
import { UpdateSuscriptoreDto } from './dto/update-suscriptore.dto';
import { Suscriptor } from './entities/suscriptor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class SuscriptoresService {
  constructor(@InjectRepository(Suscriptor) private suscriptorRepository: Repository<Suscriptor>) {}

  async create(createSuscriptoreDto: CreateSuscriptoreDto) {
    try {
      const newSuscriptor = this.suscriptorRepository.create(createSuscriptoreDto);
      return this.suscriptorRepository.save(newSuscriptor);
    } catch (error) {
      throw new ExceptionsHandler(error);
    }
  }

  findAll() {
    return this.suscriptorRepository.find({relations:['fk_usuario']});
  }

  findOne(id: number) {
    return `This action returns a #${id} suscriptore`;
  }

  update(id: number, updateSuscriptoreDto: UpdateSuscriptoreDto) {
    return `This action updates a #${id} suscriptore`;
  }

  remove(id: number) {
    return `This action removes a #${id} suscriptore`;
  }
}
