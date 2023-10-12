import { Module } from '@nestjs/common';
import { AutenticacionController } from './autenticacion/autenticacion.controller';
import { AutenticacionService } from './autenticacion/autenticacion.service';

@Module({
  controllers: [AutenticacionController],
  providers: [AutenticacionService]
})
export class UsuariosModule {}
