import { ActionTree } from 'vuex';
import eventsService from '@/services/events-service';
import { EditFormState } from './types';
import { MutationTypes, RootState } from '../types';

const actions: ActionTree<EditFormState, RootState> = {
  fetchEditEvent({ commit }, payload: string): void {
    eventsService.fetchEvent(payload)
      .then((event) => {
        commit(MutationTypes.UPDATE_EDIT_EVENT, event);
      });
  },
  updateEvent({ commit, state }, payload: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const data = {
        id: payload,
        ...state.fields,
      };
      eventsService.updateEvent(data)
        .then(() => {
          commit(MutationTypes.CLEAR_EDIT_EVENT);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createEvent({ commit, state }): Promise<void> {
    return new Promise((resolve, reject) => {
      const data = {
        ...state.fields,
      };
      eventsService.createEvent(data)
        .then(() => {
          commit(MutationTypes.CLEAR_EDIT_EVENT);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateTitle({ commit }, payload: string): void {
    commit(MutationTypes.UPDATE_TITLE, payload);
  },
  updateDescription({ commit }, payload: string): void {
    commit(MutationTypes.UPDATE_DESCRIPTION, payload);
  },
  updateDate({ commit }, payload: string): void {
    commit(MutationTypes.UPDATE_DATE, payload);
  },
};

export default actions;
