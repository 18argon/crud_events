import Vue from 'vue';
import Vuex from 'vuex';
import eventsService from '@/services/events-service';
import Event from '@/models/Event';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [] as Event[],
    editEvent: {
      title: '',
      description: '',
      date: new Date(),
    },
  },
  mutations: {
    UPDATE_EVENTS(state, payload) {
      state.events = payload;
    },
    LOAD_EDIT_EVENT(state, payload) {
      state.editEvent = payload;
    },
    UPDATE_TITLE(state, payload) {
      state.editEvent.title = payload;
    },
    UPDATE_DESCRIPTION(state, payload) {
      state.editEvent.description = payload;
    },
    UPDATE_DATE(state, payload) {
      state.editEvent.date = payload;
    },
    CLEAR_EDIT_EVENT(state) {
      state.editEvent = {
        title: '',
        description: '',
        date: new Date(),
      };
    },
    DELETE_EVENT(state, payload) {
      const idx = state.events.map((event) => event.id).indexOf(payload);
      state.events.splice(idx, 1);
    },
  },
  actions: {
    fetchEvents({ commit }) {
      eventsService.fetchEvents()
        .then((events) => {
          commit('UPDATE_EVENTS', events);
        });
    },
    fetchEditEvent({ commit }, payload) {
      eventsService.fetchEvent(payload)
        .then((event) => {
          commit('LOAD_EDIT_EVENT', event);
        });
    },
    updateEvent({ commit }, payload) {
      const data = {
        id: payload,
        ...this.state.editEvent,
      };
      eventsService.updateEvent(data)
        .then(() => {
          commit('CLEAR_EDIT_EVENT');
        });
    },
    createEvent({ commit }) {
      const data = {
        ...this.state.editEvent,
      };
      eventsService.createEvent(data)
        .then(() => {
          commit('CLEAR_EDIT_EVENT');
        });
    },
    deleteEvent({ commit }, payload) {
      eventsService.deleteEvent(payload)
        .then(() => {
          commit('DELETE_EVENT', payload);
        });
    },
    updateTitle({ commit }, payload) {
      commit('UPDATE_TITLE', payload);
    },
    updateDescription({ commit }, payload) {
      commit('UPDATE_DESCRIPTION', payload);
    },
    updateDate({ commit }, payload) {
      commit('UPDATE_DATE', payload);
    },
  },
  getters: {
    events: (state) => state.events,
    editEvent: (state) => state.editEvent,
  },
  modules: {
  },
});
