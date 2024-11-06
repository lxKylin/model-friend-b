import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(+process.env.SERVICE_PORT, '1');
  await app.listen(+process.env.SERVICE_PORT, () => {
    console.log(+process.env.SERVICE_PORT, '2');
    console.log(`项目运行在http:localhost:${process.env.SERVICE_PORT}/api`);
  });
}
bootstrap();
