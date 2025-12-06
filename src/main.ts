import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API for Ticket Booking')
    .setDescription('POC for Ticket Booking API')
    .setVersion('1.0')
    .addTag('Ticket Booking APIs') // Optional: Add tags for grouping endpoints
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // 'api' is the path to access Swagger UI
  await app.useLogger(app.get(Logger));
  await app.listen(3000);
}
bootstrap();
