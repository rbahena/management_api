import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // start swagger section
  const config = new DocumentBuilder()
    .setTitle('Documentación')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, document);
  // end swagger section

  app.enableCors();
  await app.listen(process.env.PORT_LISTEN || 3000);
}
bootstrap();
