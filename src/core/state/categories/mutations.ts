import {Category} from '@/core/api.type';
import {
  LOAD_CATEGORIES,
  SET_ERROR,
  SET_CATEGORIES,
  UDAPTE_SELECTED_CATEGORY,
} from './index';

interface State {
  categories: Category[];
  error: string;
}
export const state: State = {
  categories: [],
  error: null,
};

export const mutations = {
  [LOAD_CATEGORIES](state) {
    state.error = null;
  },
  [SET_CATEGORIES](state, categories) {
    state.categories = categories;
  },
  [UDAPTE_SELECTED_CATEGORY](state, category) {
    state.categories = state.categories.map(filter => ({
      ...filter,
      selected: filter.category === category,
    }));
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
};
