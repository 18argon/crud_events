import { MutationTree } from 'vuex';
import { EditFormState, EditFormFields } from './types';
import { MutationTypes } from '../types';

const mutations: MutationTree<EditFormState> = {
  [MutationTypes.UPDATE_EDIT_EVENT](state, payload: EditFormFields) {
    state.fields = payload;
  },
  [MutationTypes.UPDATE_TITLE](state, payload) {
    state.fields.title = payload;
  },
  [MutationTypes.UPDATE_DESCRIPTION](state, payload) {
    state.fields.description = payload;
  },
  [MutationTypes.UPDATE_DATE](state, payload) {
    state.fields.date = payload;
  },
  [MutationTypes.CLEAR_EDIT_EVENT](state) {
    state.fields = {
      title: '',
      description: '',
      date: new Date(),
    };
  },
};

export default mutations;
