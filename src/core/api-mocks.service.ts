import {Movie, Category, Genre, Comment} from '@/core/api.type';
import {IApiService} from '@/core/i-api.service';
import {camelCaseMapper, delay} from '@/shared/util';

const time = 1000;

export class ApiMocksService implements IApiService {
  getMovies(count: number): Promise<Movie[]> {
    return new Promise(resolve =>
      resolve(
        camelCaseMapper(require('../assets/mocks/movies.json')).slice(0, count)
      )
    ).then(delay<Movie[]>(time));
  }

  getMovieById(id: number): Promise<Movie> {
    return new Promise((resolve, reject) => {
      const movie = camelCaseMapper(
        require('../assets/mocks/movies.json')
      ).filter(movie => id === movie.id)[0];
      movie ? resolve(movie) : reject('error');
    }).then(delay<Movie>(time));
  }

  getCategories(): Promise<Category[]> {
    return new Promise(resolve =>
      resolve(camelCaseMapper(require('../assets/mocks/categories.json')))
    ).then(delay<Category[]>(time));
  }

  getGenres(): Promise<Genre[]> {
    return new Promise(resolve =>
      resolve(camelCaseMapper(require('../assets/mocks/genres.json')))
    ).then(delay<Genre[]>(time));
  }

  getCommentsByMovieId(id: number): Promise<Comment[]> {
    return new Promise(resolve =>
      resolve(
        camelCaseMapper(require('../assets/mocks/comments.json')).filter(
          (comment: Comment) => id === comment.movieId
        )
      )
    ).then(delay<Comment[]>(time));
  }

  addCommentByMovieId(comment: Comment): Promise<Comment> {
    return new Promise(resolve => resolve(comment)).then(delay<Comment>(time));
  }

  deleteCommentById(movieId: number, id: number): Promise<string> {
    return new Promise(resolve => resolve(`Comment ${id} deleted`)).then(
      delay<string>(time)
    );
  }
}
