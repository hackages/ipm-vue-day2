import settingsProvider from '@/core/settings.provider';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const UDAPTE_SELECTED_CATEGORY = 'UDAPTE_SELECTED_CATEGORY';
export const SET_ERROR = 'SET_ERROR';

export const actions = {
  LoadCategories({commit}) {
    commit(LOAD_CATEGORIES);
    settingsProvider.apiService
      .getCategories()
      .then(categories => commit(SET_CATEGORIES, categories))
      .catch(error => commit(SET_ERROR, error));
  },
};
