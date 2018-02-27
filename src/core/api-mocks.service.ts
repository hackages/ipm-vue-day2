import {Movie, Category, Genre, Comment} from '@/core/api.type';
import {IApiService} from '@/core/i-api.service';
import {camelCaseMapper} from '@/shared/util';

export class ApiMocksService implements IApiService {
  getMovies(count: number): Promise<Movie[]> {
    return new Promise(resolve =>
      resolve(
        camelCaseMapper(require('../assets/mocks/movies.json')).slice(0, count)
      )
    );
  }

  getMovieById(id: number): Promise<Movie> {
    return new Promise((resolve, reject) => {
      const movie = camelCaseMapper(
        require('../assets/mocks/movies.json')
      ).filter(movie => id === movie.id)[0];
      movie ? resolve(movie) : reject('error');
    });
  }

  getCategories(): Promise<Category[]> {
    return new Promise(resolve =>
      resolve(camelCaseMapper(require('../assets/mocks/categories.json')))
    );
  }

  getGenres(): Promise<Genre[]> {
    return new Promise(resolve =>
      resolve(camelCaseMapper(require('../assets/mocks/genres.json')))
    );
  }

  getCommentsByMovieId(id: number): Comment[] {
    return camelCaseMapper(require('../assets/mocks/comments.json')).filter(
      (comment: Comment) => id === comment.movieId
    );
  }

  addCommentByMovieId(comment: Comment): Comment {
    return comment;
  }

  deleteCommentById(id: number): string {
    return `Comment ${id} deleted`;
  }
}
