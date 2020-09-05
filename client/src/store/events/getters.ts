import { GetterTree } from 'vuex';
import { EventsState } from './types';
import { RootState } from '../types';

const getters: GetterTree<EventsState, RootState> = {
  events: (state) => state.events,
};

export default getters;
