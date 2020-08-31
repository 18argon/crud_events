import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from "./schemas/event.schema";
import { CreateEventDao } from './dto/create-event.dto';
import { UpdateEventDao } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) { }

  @Post()
  async create(@Body() createEventDao: CreateEventDao): Promise<void> {
    this.eventsService.create(createEventDao);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEventDao: UpdateEventDao): Promise<void> {
    this.eventsService.update(id, updateEventDao);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Event> {
    return this.eventsService.findById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.eventsService.deleteById(id);
  }
}
