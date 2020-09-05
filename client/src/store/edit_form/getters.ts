import { GetterTree } from 'vuex';
import { EditFormState, EditFormFields } from './types';
import { RootState } from '../types';

const getters: GetterTree<EditFormState, RootState> = {
  editEvent(state): EditFormFields {
    return state.fields;
  },
};

export default getters;
