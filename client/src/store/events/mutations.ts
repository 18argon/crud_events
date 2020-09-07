import { MutationTree } from 'vuex';
import EventEntry from '@/models/EventEntry';
import { EventsState } from './types';
import { MutationTypes } from '../types';

const mutations: MutationTree<EventsState> = {
  [MutationTypes.UPDATE_EVENTS](state, payload: EventEntry[]) {
    state.events = payload;
  },
  [MutationTypes.DELETE_EVENT](state, payload: string) {
    const idx = state.events.map((event) => event.id).indexOf(payload);
    state.events.splice(idx, 1);
  },
};

export default mutations;
