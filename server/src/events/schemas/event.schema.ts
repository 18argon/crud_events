
import { Document } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Event extends Document {
  @Prop({
    type: String,
    required: true
  })
  title: string;

  @Prop({
    type: String,
    required: true
  })
  description: string;

  @Prop({
    type: Date,
    required: true
  })
  date: Date;
};

export const EventSchema = SchemaFactory.createForClass(Event);
