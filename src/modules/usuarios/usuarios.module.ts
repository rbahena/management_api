import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AutenticacionController } from './autenticacion/autenticacion.controller';
import { AutenticacionService } from './autenticacion/autenticacion.service';
import { User } from './autenticacion/entities/usuario.entity';

import { SuscriptoresController } from './suscriptores/suscriptores.controller';
import { SuscriptoresService } from './suscriptores/suscriptores.service';

import { PlanesPagoController } from './planes-pago/planes-pago.controller';
import { PlanesPagoService } from './planes-pago/planes-pago.service';

import { OperacionesController } from './operaciones/operaciones.controller';
import { OperacionesService } from './operaciones/operaciones.service';
import { JwtModule } from '@nestjs/jwt';
import config from 'src/environments/config';
import { ConfigType } from '@nestjs/config';
import { JwtEstrategy } from 'src/core/utils/jwt.strategy';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      inject:[config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwt.jwt_secret,
          signOptions: {
            expiresIn: configService.jwt.jwt_expiration,
          },
        };
      },
    }),
    PassportModule
  ],
  controllers: [
    AutenticacionController,
    SuscriptoresController,
    PlanesPagoController,
    OperacionesController,
  ],
  providers: [
    AutenticacionService,
    SuscriptoresService,
    PlanesPagoService,
    OperacionesService,
    JwtEstrategy
  ],
  exports: [],
})
export class UsuariosModule {}
