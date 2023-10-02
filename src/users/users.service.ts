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
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { contrasena, correo_electronico, ...user } = createUserDto;
      const mailExist = await this.userRepository.findOne({
        where: { correo_electronico },
      });
      if (mailExist != null)
        throw new HttpException(
          'El correo electrónico ya se encuentra registrado',
          HttpStatus.CONFLICT,
        );

      const newUserEncryptPass = {
        ...user,
        correo_electronico,
        contrasena: await generateHash(contrasena),
      };
      const newUser = this.userRepository.create(newUserEncryptPass);
      return this.userRepository.save(newUser);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    const allUsers = await this.userRepository.find({
      relations: ['suscriptor'],
    });
    return allUsers;
  }

  async findOne(id: number) {
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

    delete userExist.contrasena;
    return userExist;
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
      throw new HttpException(
        'Validar usuario o contraseña',
        HttpStatus.CONFLICT,
      );

    delete userExist.contrasena;
    const tokenPayload = {
      correo: userExist.correo_electronico,
      operacion: userExist.nombre_operacion_prueba,
      inicioPrueba: userExist.inicio_prueba,
    };
    const token = await this.jwtService.signAsync(tokenPayload);
    const data = {
      token,
      user: userExist,
    };
    return data;
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
