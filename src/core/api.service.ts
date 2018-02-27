import {Movie, Category, Genre, Comment} from '@/core/api.type';
import {IApiService} from '@/core/i-api.service';

export class ApiService implements IApiService {
  getMovies(count: number): Promise<Movie[]> {
    return;
  }

  getMovieById(id: number): Promise<Movie> {
    throw new Error('Method not implemented.');
  }

  getCategories(): Promise<Category[]> {
    return;
  }

  getGenres(): Promise<Genre[]> {
    return;
  }

  getCommentsByMovieId(id: number): Comment[] {
    return;
  }

  addCommentByMovieId(comment: Comment): Comment {
    throw new Error('Method not implemented.');
  }

  deleteCommentById(id: number): string {
    throw new Error('Method not implemented.');
  }
}
