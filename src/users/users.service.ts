import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id_usuario: id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id_usuario: id, estatus: 1 },
    });

    if (user == null) return;
    return this.userRepository.update({ id_usuario: id }, updateUserDto);
  }

  async remove(id: number) {
    const currentDate = new Date(Date.now());
    const lowDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');

    const user = await this.userRepository.findOne({
      where: { id_usuario: id, estatus: 1 },
    });

    if (user == null) return;
    return this.userRepository.update(
      { id_usuario: id },
      { estatus: 0, fecha_baja: lowDate },
    );
  }
}
