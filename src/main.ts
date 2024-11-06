import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置全局路由前缀
  app.setGlobalPrefix('api');

  // 支持跨域
  app.enableCors();

  await app.listen(+process.env.SERVICE_PORT, () => {
    console.log(`项目运行在http:localhost:${process.env.SERVICE_PORT}/api`);
  });
}
bootstrap();
