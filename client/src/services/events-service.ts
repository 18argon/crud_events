import Event from '@/models/Event';

export default {
  async fetchEvents(): Promise<Event[]> {
    return fetch(`${process.env.VUE_APP_API_URL}/events`)
      .then((response) => response.json());
  },
  async fetchEvent(id: string): Promise<Event> {
    return fetch(`${process.env.VUE_APP_API_URL}/events/${id}`)
      .then((response) => response.json());
  },
  async deleteEvent(eventId: string): Promise<void> {
    fetch(`${process.env.VUE_APP_API_URL}/events/${eventId}`, {
      method: 'DELETE',
    });
  },
  async createEvent(event: Event): Promise<void> {
    console.log(event);
    fetch(`${process.env.VUE_APP_API_URL}/events`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(event),
    });
  },
  async updateEvent(event: Event): Promise<void> {
    console.log(event);
    fetch(`${process.env.VUE_APP_API_URL}/events/${event.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(event),
    });
  },
};
