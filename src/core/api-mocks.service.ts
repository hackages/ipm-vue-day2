import {Movie, Category, Genre, Comment} from '@/core/api.type';
import {IApiService} from '@/core/i-api.service';
import {getCamelFromArrayOrObject} from '@/shared/util';

export class ApiMocksService implements IApiService {
  getMovies(): Movie[] {
    return getCamelFromArrayOrObject(require('../assets/mocks/movies.json'));
  }

  getCategories(): Category[] {
    return getCamelFromArrayOrObject(
      require('../assets/mocks/categories.json')
    );
  }

  getGenres(): Genre[] {
    return getCamelFromArrayOrObject(require('../assets/mocks/genres.json'));
  }

  getCommentsByMovieId(id: number): Comment[] {
    return getCamelFromArrayOrObject(
      require('../assets/mocks/comments.json')
    ).filter((comment: Comment) => id === comment.movieId);
  }
}
