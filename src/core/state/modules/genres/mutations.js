import {LOAD_GENRES, SET_ERROR, SET_GENRES} from './index';

export const state = {
  genres: [],
  error: null,
};

export const mutations = {
  [LOAD_GENRES](state) {
    state.error = null;
  },
  [SET_GENRES](state, genres) {
    state.genres = genres;
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
};
