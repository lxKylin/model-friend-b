import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export default class BaseSchema extends Document {
  @Prop({ type: Date, default: () => new Date() })
  createTime: Date;

  @Prop({ type: Date, default: () => new Date() })
  updateTime: Date;
}
