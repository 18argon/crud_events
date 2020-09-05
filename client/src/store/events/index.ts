import { Module } from 'vuex';
import { RootState } from '../types';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { EventsState } from './types';

export const state: EventsState = {
  events: [],
};

const namespaced = false;

const eventsModule: Module<EventsState, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};

export default eventsModule;
