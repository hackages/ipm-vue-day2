import {orderBy} from 'lodash';
import {ApiMocksService} from '@/core/api-mocks.service';
import {ApiService} from '@/core/api.service';
import {Movie, Category, Genre, Comment} from '@/core/api.type';

const apiService =
  process.env.NODE_ENV === 'production'
    ? new ApiService()
    : new ApiMocksService();

export default {
  getCommentsById(id: number): Comment[] {
    return apiService.getCommentsByMovieId(id);
  },
  addCommentByMovieId(comment: Comment): Comment {
    return apiService.addCommentByMovieId(comment);
  },
  deleteCommentById(id: number): string {
    return apiService.deleteCommentById(id);
  },
};
