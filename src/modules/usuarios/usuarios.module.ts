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




@Module({
  imports:[TypeOrmModule.forFeature([User])],
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
  ],
  exports: [],
})
export class UsuariosModule {}
