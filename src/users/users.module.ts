import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Suscriptor } from 'src/suscriptores/entities/suscriptor.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/core/strategy/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Suscriptor]),
    JwtModule.register({
      secret: 'SECRETO',
      signOptions: { expiresIn: '28800s' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
})
export class UsersModule {}
