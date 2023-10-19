import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get('isPublic', context.getHandler());
    if (isPublic) return true;
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Auth');
    const isAuth = authHeader === '123';
    if (!isAuth) throw new UnauthorizedException('No tienes permisos para acceder.');
    return isAuth;
  }
}
