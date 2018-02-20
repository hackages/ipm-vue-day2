import {Movie, Category, Genre, Comment} from '@/core/api.type';
import {IApiService} from '@/core/i-api.service';

export class ApiService implements IApiService {
  getMovies(): Movie[] {
    return;
  }

  getCategories(): Category[] {
    return;
  }

  getGenres(): Genre[] {
    return;
  }

  getCommentsByMovieId(id: number): Comment[] {
    return;
  }
}
