import { Module } from '@nestjs/common';

// 环境配置：pnpm add --save @nestjs/config
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';

import { SchemasModule } from './schemas.module';

import { PaintController } from '@/controllers/paint.controller';

import { PaintService } from '@/services/paint.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    SchemasModule
  ],
  controllers: [PaintController],
  providers: [PaintService]
})
export class AppModule {}
