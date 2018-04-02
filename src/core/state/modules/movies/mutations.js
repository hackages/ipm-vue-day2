import {
  SET_MOVIES,
  SET_ERROR,
  LOAD_MOVIES,
  LOAD_MOVIE,
  SET_MOVIE,
} from './index';

export const state = {
  movies: {},
  error: null,
};

export const mutations = {
  [LOAD_MOVIES](state) {
    state.error = null;
  },
  [SET_MOVIES](state, movies) {
    state.movies = movies.reduce((acc, it) => ({...acc, [it.id]: it}), {});
  },
  [LOAD_MOVIE](state) {
    state.error = null;
  },
  [SET_MOVIE](state, movie) {
    state.movies = {...state.movie, [movie.id]: movie};
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
};
