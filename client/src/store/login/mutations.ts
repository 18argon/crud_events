import { MutationTree } from 'vuex';
import { LoginFormState } from './types';
import { MutationTypes } from '../types';

const mutations: MutationTree<LoginFormState> = {
  [MutationTypes.UPDATE_LOGIN_EMAIL](state, payload) {
    state.fields.email = payload;
  },
  [MutationTypes.UPDATE_LOGIN_PASSWORD](state, payload) {
    state.fields.password = payload;
  },
};

export default mutations;
