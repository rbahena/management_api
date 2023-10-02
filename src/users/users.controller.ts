import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoggerInterceptor } from 'src/core/interceptors/logger/logger.interceptor';
import { User } from './entities/user.entity';
import { promises } from 'dns';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('users') // Add tag for swagger documentation
@UseInterceptors(LoggerInterceptor) // Add loggerInterceptor
@Controller('users') // Name controller
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get('getAllUsers')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('getUser/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto ): Promise<any> {
    return this.usersService.login(loginUserDto);
  }

  @Patch('updateUser/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('deleteUser/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
