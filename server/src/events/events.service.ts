import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event } from "./schemas/event.schema";
import { CreateEventDao } from './dao/create-event.dao';
import { UpdateEventDao } from "./dao/update-event.dao";

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) { }
  async create(createEventDao: CreateEventDao): Promise<Event> {
    const createdEvent = new this.eventModel(createEventDao);
    return createdEvent.save();
  }

  async update(id: string, updateEventDao: UpdateEventDao): Promise<void> {
    this.eventModel.updateOne({ _id: id }, updateEventDao).exec();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find(
      {},
      {
        title: 1,
        description: 1,
        date: 1,
        id: '$_id',
        _id: 0
      })
      .exec();
  }

  async findById(id: string): Promise<Event> {
    return this.eventModel.findOne(
      { _id: id },
      {
        title: 1,
        description: 1,
        date: 1,
        id: '$_id',
        _id: 0
      })
      .exec();
  }

  async deleteById(id: string): Promise<void> {
    this.eventModel.deleteOne({ _id: id }).exec();
  }
}
