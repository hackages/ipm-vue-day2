import {Movie} from '@/core/api.type';
import {SET_MOVIES, SET_ERROR, LOAD_MOVIES, LOAD_MOVIE, SET_MOVIE} from './index';
import Vue from 'vue';

interface State {
  movies: Movie[];
  error: string;
}
export const state: State = {
  movies: [],
  error: null,
};

export const mutations = {
  [LOAD_MOVIES](state) {
    state.error = null;
  },
  [SET_MOVIES](state, movies) {
    state.movies = movies;
  },
  [LOAD_MOVIE](state) {
    state.error = null;
  },
  [SET_MOVIE](state, movie) {
    state.movies = [...state.movies, movie];
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
};
