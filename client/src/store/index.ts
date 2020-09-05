import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import editForm from './edit_form';
import events from './events';
import { RootState } from './types';

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
  modules: {
    events,
    editForm,
  },
};

export default new Vuex.Store<RootState>(storeOptions);
