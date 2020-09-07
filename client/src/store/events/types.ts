import EventEntry from '@/models/EventEntry';

export interface EventsState {
  events: EventEntry[];
}

export const namespace = 'events';
