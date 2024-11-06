import { Module } from '@nestjs/common';

// 环境配置：pnpm add --save @nestjs/config
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';

import { SchemasModule } from './schemas.module';

import { AppController } from '@/controllers/app.controller';
import { AppService } from '@/services/app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    SchemasModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
