import Event from '@/models/Event';

export default {
  async fetchEvents(): Promise<Event[]> {
    return fetch('http://localhost:3000/events')
      .then((response) => response.json());
  },
  async fetchEvent(id: string): Promise<Event> {
    return fetch(`http://localhost:3000/events/${id}`)
      .then((response) => response.json());
  },
  async deleteEvent(eventId: string): Promise<void> {
    fetch(`http://localhost:3000/events/${eventId}`, {
      method: 'DELETE',
    });
  },
  async updateEvent(event: Event): Promise<void> {
    console.log(event);
    fetch(`http://localhost:3000/events/${event.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(event),
    });
  },
};
