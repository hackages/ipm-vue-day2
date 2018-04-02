import settingsProvider from '@/core/settings.provider.js';

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';
export const LOAD_MOVIE = 'LOAD_MOVIE';
export const SET_MOVIE = 'SET_MOVIE';
export const SET_ERROR = 'SET_ERROR';
export const actions = {
  LoadMovies({commit}, count) {
    commit(LOAD_MOVIES);
    settingsProvider.apiService
      .getMovies(count)
      .then(movies => commit(SET_MOVIES, movies))
      .catch(error => commit(SET_ERROR, error));
  },
  LoadMovie({commit}, id) {
    commit(LOAD_MOVIE);
    settingsProvider.apiService
      .getMovieById(id)
      .then(movies => commit(SET_MOVIE, movies))
      .catch(error => commit(SET_ERROR, error));
  },
};
