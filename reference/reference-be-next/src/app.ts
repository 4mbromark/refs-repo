import { NestFactory } from '@nestjs/core';
import express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  app.use(express.static('../reference-fe/dist/reference-fe'));
  app.enableCors();
  await app.listen(PORT);
}

bootstrap();
