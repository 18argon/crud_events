
import { Document } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema()
export class Event extends Document {
  @Prop({
    required: true
  })
  title: string;

  @Prop({
    required: true
  })
  description: string;

  @Prop({
    required: true
  })
  date: Date;
};

export const EventSchema = SchemaFactory.createForClass(Event);
