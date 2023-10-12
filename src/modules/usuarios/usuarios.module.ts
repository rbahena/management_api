import { Module } from '@nestjs/common';
import { AutenticacionController } from './autenticacion/autenticacion.controller';
import { AutenticacionService } from './autenticacion/autenticacion.service';
import { SuscriptoresController } from './suscriptores/suscriptores.controller';
import { SuscriptoresService } from './suscriptores/suscriptores.service';
import { PlanesPagoController } from './planes-pago/planes-pago.controller';
import { PlanesPagoService } from './planes-pago/planes-pago.service';
import { OperacionesController } from './operaciones/operaciones.controller';
import { OperacionesService } from './operaciones/operaciones.service';

@Module({
  controllers: [AutenticacionController, SuscriptoresController, PlanesPagoController, OperacionesController],
  providers: [AutenticacionService, SuscriptoresService, PlanesPagoService, OperacionesService]
})
export class UsuariosModule {}