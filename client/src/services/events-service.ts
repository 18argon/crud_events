import EventEntry from '@/models/EventEntry';

export default {
  async fetchEvents(): Promise<EventEntry[]> {
    return fetch(`${process.env.VUE_APP_API_URL}/events`)
      .then((response) => response.json());
  },
  async fetchEvent(id: string): Promise<EventEntry> {
    return fetch(`${process.env.VUE_APP_API_URL}/events/${id}`)
      .then((response) => response.json());
  },
  async deleteEvent(eventId: string): Promise<Response> {
    return fetch(`${process.env.VUE_APP_API_URL}/events/${eventId}`, {
      method: 'DELETE',
    });
  },
  async createEvent(event: EventEntry): Promise<Response> {
    return fetch(`${process.env.VUE_APP_API_URL}/events`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(event),
    });
  },
  async updateEvent(event: EventEntry): Promise<Response> {
    return fetch(`${process.env.VUE_APP_API_URL}/events/${event.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(event),
    });
  },
};
