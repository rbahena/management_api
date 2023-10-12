import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

//   @Post('createUser')
//   create(@Body() createUserDto: CreateUserDto): Promise<User> {
//     return this.usersService.create(createUserDto);
//   }
}
