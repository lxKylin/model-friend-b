import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import BaseSchema from './base.schema';

@Schema({
  collection: 'paints'
})
export class Paints extends BaseSchema {
  // 品牌
  @Prop({ required: true })
  brand: string;

  // 色系分类
  @Prop({ required: true })
  colorClassification: string;

  // 颜色名称
  @Prop({ required: true })
  name: string;

  // 色号
  @Prop({ required: true })
  colorCode: string;

  // 编号
  @Prop({ required: true })
  number: string;

  // 光泽分类
  @Prop({ required: true })
  glossClassification: string;

  // 用法分类
  @Prop({ required: true })
  usageClassification: string;
}

// 根据 Paint 类创建一个 Mongoose Schema。
export const PaintsSchema = SchemaFactory.createForClass(Paints);
