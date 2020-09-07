import { ActionTree } from 'vuex';
import { LoginFormState } from './types';
import { MutationTypes, RootState } from '../types';

const actions: ActionTree<LoginFormState, RootState> = {
  login({ state }): Promise<void> {
    return new Promise((resolve, reject) => {
      const { email, password } = state.fields;
      if (email === 'email@email.com' && password === '1234567890') {
        resolve();
      } else {
        reject();
      }
    });
  },
  updateEmail({ commit }, payload: string): void {
    commit(MutationTypes.UPDATE_LOGIN_EMAIL, payload);
  },
  updatePassword({ commit }, payload: string): void {
    commit(MutationTypes.UPDATE_LOGIN_PASSWORD, payload);
  },
};

export default actions;
