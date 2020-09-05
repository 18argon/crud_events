import Event from '@/models/Event';

export interface EventsState {
  events: Event[];
}

export const namespace = 'events';
