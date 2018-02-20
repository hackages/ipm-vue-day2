import {orderBy} from 'lodash';
import {ApiMocksService} from '@/core/api-mocks.service';
import {ApiService} from '@/core/api.service';
import {Movie, Category, Genre, Comment} from '@/core/api.type';

const apiService =
  process.env.NODE_ENV === 'production'
    ? new ApiService()
    : new ApiMocksService();

export const getOrderedByTitleMovies = (count: number): Movie[] => {
  return orderBy(apiService.getMovies().slice(0, count), ['title']);
};

export const getMovieById = (id: number): Movie => {
  return apiService.getMovies().filter(movie => id === movie.id)[0];
};

export const getOrderedCategories = (): Category[] => {
  const [all, ...rest] = apiService
    .getCategories()
    .reduce(
      (acc, it) => (it.category === 'ALL' ? [it, ...acc] : [...acc, it]),
      []
    );
  return [all, ...orderBy(rest, ['category'])];
};

export const getOrderedGenres = (): Genre[] => {
  return orderBy(apiService.getGenres(), ['id']);
};

export const getCommentsById = (id: number): Comment[] => {
  return apiService.getCommentsByMovieId(id);
};

export const addCommentByMovieId = (comment: Comment): Comment => {
  return apiService.addCommentByMovieId(comment);
};

export const deleteCommentById = (id: number): string => {
  return apiService.deleteCommentById(id);
};
