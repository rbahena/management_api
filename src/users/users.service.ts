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
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { contrasena, correo_electronico, ...user } = createUserDto;
      const mailExist = await this.userRepository.findOne({
        where: { correo_electronico },
      });
      if (!mailExist)
        throw new HttpException(
          'El correo electrónico ya se encuentra registrado',
          HttpStatus.CONFLICT,
        );

      const newUserEncryptPass = {
        ...user,
        contrasena: await generateHash(contrasena),
      };
      const newUser = this.userRepository.create(newUserEncryptPass);
      return this.userRepository.save(newUser);
    } catch (error) {
      throw new ExceptionsHandler(error);
    }
  }

  async findAll() {
    try {
      const allUsers = await this.userRepository.find({
        relations: ['suscriptor'],
      });
      return allUsers;
    } catch (error) {
      throw new HttpException(
        'Ocurrio un error al intentar recuperar los datos',
        HttpStatus.CONFLICT,
      );
    }
  }

  async findOne(id: number) {
    try {
      const userExist = await this.userRepository.findOne({
        where: {
          id_usuario: id,
        },
        relations: ['suscriptor'],
      });
      if (!userExist)
        throw new HttpException(
          'No se encontro la información solicitada',
          HttpStatus.NOT_FOUND,
        );
      return userExist;
    } catch (error) {
      throw new HttpException(
        'Ocurrio un error al intentar recuperar los datos',
        HttpStatus.CONFLICT,
      );
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const { contrasena, correo_electronico } = loginUserDto;
      const userExist = await this.userRepository.findOne({
        where: { correo_electronico, estatus: 1 },
      });
      if (!userExist)
        throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
      const IsPassowrdCheck = await compareHash(
        contrasena,
        userExist.contrasena,
      );
      if (!IsPassowrdCheck)
        throw new HttpException(
          'Validar usuario o contraseña',
          HttpStatus.CONFLICT,
        );

      delete userExist.contrasena;
      return userExist;
    } catch (error) {
      throw new HttpException(
        'Ocurrio un error al iniciar sesión, intentar nuevamente.',
        HttpStatus.CONFLICT,
      );
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.findOne({
        where: { id_usuario: id, estatus: 1 },
      });

      if (!user)
        throw new HttpException(
          'No existe la información solicitada, intentar nuevamente.',
          HttpStatus.NOT_FOUND,
        );
      return this.userRepository.update({ id_usuario: id }, updateUserDto);
    } catch (error) {
      throw new HttpException(
        'Ocurrio un error al actualizar la información, intentar nuevamente.',
        HttpStatus.CONFLICT,
      );
    }
  }

  async remove(id: number) {
    try {
      const currentDate = new Date(Date.now());
      const lowDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
      const user = await this.userRepository.findOne({
        where: { id_usuario: id, estatus: 1 },
      });

      if (!user)
        throw new HttpException(
          'No existe la información solicitada, intentar nuevamente.',
          HttpStatus.NOT_FOUND,
        );
      return this.userRepository.update(
        { id_usuario: id },
        { estatus: 0, fecha_baja: lowDate },
      );
    } catch (error) {
      throw new HttpException(
        'No existe la información solicitada, intentar nuevamente.',
        HttpStatus.CONFLICT,
      );
    }
  }
}
