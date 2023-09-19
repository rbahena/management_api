import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add swagger
  const config = new DocumentBuilder()
    .setTitle('Management API')
    .setDescription('My description')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Documentation', app, document);

  await app.listen(3000);
}
bootstrap();
