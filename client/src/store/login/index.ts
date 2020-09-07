import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { LoginFormState } from './types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const state: LoginFormState = {
  fields: {
    email: '',
    password: '',
  },
};

const namespaced = false;

const loginFormModule: Module<LoginFormState, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};

export default loginFormModule;
