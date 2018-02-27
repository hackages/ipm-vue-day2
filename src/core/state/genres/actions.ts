import {apiService} from '@/core/state/store';

export const LOAD_GENRES = 'LOAD_GENRES';
export const SET_GENRES = 'SET_GENRES';
export const SET_ERROR = 'SET_ERROR';

export const actions = {
  LoadGenres({commit}) {
    commit(LOAD_GENRES);
    apiService
      .getGenres()
      .then(categories => commit(SET_GENRES, categories))
      .catch(error => commit(SET_ERROR, error));
  },
};
