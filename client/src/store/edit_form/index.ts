import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { EditFormState } from './types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const state: EditFormState = {
  fields: {
    title: '',
    description: '',
    date: new Date(),
  },
};

const namespaced = false;

const editFormModule: Module<EditFormState, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};

export default editFormModule;
