import settingsProvider from '@/core/services/settings.provider.js';

export const LOAD_COMMENTS_BY_MOVIE = 'LOAD_COMMENTS_BY_MOVIE';
export const SET_COMMENTS_BY_MOVIE = 'SET_COMMENTS_BY_MOVIE';
export const ADD_COMMENTS_BY_MOVIE = 'ADD_COMMENTS_BY_MOVIE';
export const DEL_COMMENT_BY_MOVIE = 'DEL_COMMENT_BY_MOVIE';
export const SET_ERROR = 'SET_ERROR';

export const actions = {
  LoadCommentsByMovie({commit}, id) {
    commit(LOAD_COMMENTS_BY_MOVIE);
    settingsProvider.apiService
      .getComments(id)
      .then(comments => commit(SET_COMMENTS_BY_MOVIE, {[id]: comments}))
      .catch(error => commit(SET_ERROR, error));
  },
  DelCommentByMovie({commit}, {movieId, id}) {
    settingsProvider.apiService
      .deleteCommentById(movieId, id)
      .then(() => commit(DEL_COMMENT_BY_MOVIE, {movieId, id}))
      .catch(error => commit(SET_ERROR, error));
  },
  AddCommentByMovie({commit}, comment) {
    settingsProvider.apiService
      .addCommentByMovieId(comment)
      .then(newComment => commit(ADD_COMMENTS_BY_MOVIE, newComment))
      .catch(error => commit(SET_ERROR, error));
  },
};
