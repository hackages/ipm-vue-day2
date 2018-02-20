import {Movie, Category, Genre, Comment} from '@/core/api.type';

export abstract class IApiService {
  abstract getMovies(): Movie[];
  abstract getCategories(): Category[];
  abstract getGenres(): Genre[];
  abstract getCommentsByMovieId(id: number): Comment[];
}
