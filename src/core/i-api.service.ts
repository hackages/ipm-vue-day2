import {Movie, Category, Genre, Comment} from '@/core/api.type';

export abstract class IApiService {
  abstract getMovies(count: number): Promise<Movie[]>;
  abstract getMovieById(id: number): Promise<Movie>;
  abstract getCategories(): Promise<Category[]>;
  abstract getGenres(): Promise<Genre[]>;
  abstract getCommentsByMovieId(id: number): Comment[];
  abstract addCommentByMovieId(comment: Comment): Comment;
  abstract deleteCommentById(id: number): string;
}
