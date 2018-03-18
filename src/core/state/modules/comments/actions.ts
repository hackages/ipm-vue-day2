import settingsProvider from '@/core/settings.provider';
import {Comment} from '@/core/api.type';

export const LOAD_COMMENTS_BY_MOVIE = 'LOAD_COMMENTS_BY_MOVIE';
export const SET_COMMENTS_BY_MOVIE = 'SET_COMMENTS_BY_MOVIE';
export const ADD_COMMENTS_BY_MOVIE = 'ADD_COMMENTS_BY_MOVIE';
export const DEL_COMMENT_BY_MOVIE = 'DEL_COMMENT_BY_MOVIE';
export const SET_ERROR = 'SET_ERROR';

export const actions = {
  LoadCommentsByMovie({commit}, id: number) {
    commit(LOAD_COMMENTS_BY_MOVIE);
    settingsProvider.apiService
      .getCommentsByMovieId(id)
      .then(comments => commit(SET_COMMENTS_BY_MOVIE, {[id]: comments}))
      .catch(error => commit(SET_ERROR, error));
  },
  DelCommentByMovie({commit}, {movieId, id}: {movieId: number; id: number}) {
    settingsProvider.apiService
      .deleteCommentById(movieId, id)
      .then(_ => commit(DEL_COMMENT_BY_MOVIE, {movieId, id}))
      .catch(error => commit(SET_ERROR, error));
  },
  AddCommentByMovie({commit}, comment: Comment) {
    settingsProvider.apiService
      .addCommentByMovieId(comment)
      .then(newComment => commit(ADD_COMMENTS_BY_MOVIE, newComment))
      .catch(error => commit(SET_ERROR, error));
  },
};
