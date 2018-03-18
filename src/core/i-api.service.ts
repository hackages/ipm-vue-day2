import {Movie, Category, Genre, Comment} from '@/core/api.type';

export abstract class IApiService {
  abstract getMovies(count: number): Promise<Movie[]>;
  abstract getMovieById(id: number): Promise<Movie>;
  abstract getCategories(): Promise<Category[]>;
  abstract getGenres(): Promise<Genre[]>;
  abstract getCommentsByMovieId(id: number): Promise<Comment[]>;
  abstract addCommentByMovieId(comment: Comment): Promise<Comment>;
  abstract deleteCommentById(movieId: number, id: number): Promise<string>;
}
