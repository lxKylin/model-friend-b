import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Paints, PaintsSchema } from '@/schemas/paint.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Paints.name, schema: PaintsSchema }])
  ],
  exports: [MongooseModule]
})
export class SchemasModule {}
