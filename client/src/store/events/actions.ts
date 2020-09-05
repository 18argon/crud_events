import { ActionTree } from 'vuex';
import eventsService from '@/services/events-service';
import { MutationTypes, RootState } from '../types';
import { EventsState } from './types';

const actions: ActionTree<EventsState, RootState> = {
  fetchEvents({ commit }) {
    eventsService.fetchEvents()
      .then((events) => {
        commit(MutationTypes.UPDATE_EVENTS, events);
      });
  },
  fetchEditEvent({ commit }, payload) {
    eventsService.fetchEvent(payload)
      .then((event) => {
        commit(MutationTypes.UPDATE_EDIT_EVENT, event);
      });
  },
  deleteEvent({ commit }, payload) {
    eventsService.deleteEvent(payload)
      .then(() => {
        commit(MutationTypes.DELETE_EVENT, payload);
      });
  },
};

export default actions;
