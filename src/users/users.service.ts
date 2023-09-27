import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { compareHash, generateHash } from 'src/core/encrypt/handleBcrypt';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { LoginUserDto } from './dto/login-user.dto';
import { error } from 'console';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { contrasena, ...user } = createUserDto;
      const newUserEncryptPass = {...user, contrasena: await generateHash(contrasena),};
      const newUser = this.userRepository.create(newUserEncryptPass);
      return this.userRepository.save(newUser);
    } catch (error) {
      throw new ExceptionsHandler(error);
    }
  }

  findAll() {
    return this.userRepository.find({relations:['suscriptor']});
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id_usuario: id,
      },
    });
  }

  async login(loginUserDto: LoginUserDto) {
    const { contrasena, correo_electronico } = loginUserDto;
    const userExist = await this.userRepository.findOne({
      where: { correo_electronico, estatus: 1 },
    });
    if (!userExist)
      throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    const IsPassowrdCheck = await compareHash(contrasena, userExist.contrasena);
    if (!IsPassowrdCheck)
      throw new HttpException('Validar usuario o contraseña',HttpStatus.CONFLICT);

    delete userExist.contrasena;
    return userExist;
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
