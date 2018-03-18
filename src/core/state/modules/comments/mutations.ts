import {Comment} from '@/core/api.type';
import {
  LOAD_COMMENTS_BY_MOVIE,
  SET_COMMENTS_BY_MOVIE,
  ADD_COMMENTS_BY_MOVIE,
  DEL_COMMENT_BY_MOVIE,
  SET_ERROR,
} from './index';

interface CommentsByMovie {
  [key: number]: Comment[];
}

interface State {
  comments: CommentsByMovie;
  error: string;
}
export const state: State = {
  comments: {},
  error: null,
};

export const mutations = {
  [LOAD_COMMENTS_BY_MOVIE](state) {
    state.error = null;
  },
  [SET_COMMENTS_BY_MOVIE](state, comments: Comment[]) {
    state.comments = {...state.comments, ...comments};
  },
  [ADD_COMMENTS_BY_MOVIE](state, comment) {
    state.comments = {
      ...state.comments,
      [comment.movieId]: [...state.comments[comment.movieId], comment],
    };
  },
  [DEL_COMMENT_BY_MOVIE](state, {movieId, id}) {
    state.comments = {
      ...state.comments,
      [movieId]: state.comments[movieId].filter(comment => comment.id !== id),
    };
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
};
