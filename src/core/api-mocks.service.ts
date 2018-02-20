import {Movie, Category, Genre, Comment} from '@/core/api.type';
import {IApiService} from '@/core/i-api.service';
import {camelCaseMapper} from '@/shared/util';

export class ApiMocksService implements IApiService {
  getMovies(): Movie[] {
    return camelCaseMapper(require('../assets/mocks/movies.json'));
  }

  getCategories(): Category[] {
    return camelCaseMapper(require('../assets/mocks/categories.json'));
  }

  getGenres(): Genre[] {
    return camelCaseMapper(require('../assets/mocks/genres.json'));
  }

  getCommentsByMovieId(id: number): Comment[] {
    return camelCaseMapper(require('../assets/mocks/comments.json')).filter(
      (comment: Comment) => id === comment.movieId
    );
  }
}
