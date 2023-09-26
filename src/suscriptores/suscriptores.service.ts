import { Injectable } from '@nestjs/common';
import { CreateSuscriptoreDto } from './dto/create-suscriptore.dto';
import { UpdateSuscriptoreDto } from './dto/update-suscriptore.dto';

@Injectable()
export class SuscriptoresService {
  create(createSuscriptoreDto: CreateSuscriptoreDto) {
    return 'This action adds a new suscriptore';
  }

  findAll() {
    return `This action returns all suscriptores`;
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
