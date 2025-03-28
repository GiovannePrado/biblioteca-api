import { NestFactory } from '@nestjs/core';
import { LivroModule } from './livros.module';

async function bootstrap() {
  const app = await NestFactory.create(LivroModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
