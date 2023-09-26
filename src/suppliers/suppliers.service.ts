import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { proveedores } from './entities/supplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SuppliersService {

  constructor(@InjectRepository(proveedores) private suplierRepository: Repository<proveedores>){}

  create(createSupplierDto: CreateSupplierDto) {
    return 'This action adds a new supplier';
  }

  findAll() {
    return this.suplierRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} supplier`;
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplier`;
  }
}
