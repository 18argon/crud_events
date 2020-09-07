import { GetterTree } from 'vuex';
import { LoginFormState } from './types';
import { RootState } from '../types';

const getters: GetterTree<LoginFormState, RootState> = {
  email(state): string {
    return state.fields.email;
  },
  password(state): string {
    return state.fields.password;
  },
};

export default getters;
