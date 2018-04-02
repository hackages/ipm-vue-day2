import {camelCaseMapper, delay} from '@/shared/util';

const time = 1000;

export class ApiMocksService {
  getMovies(count) {
    return import('../assets/mocks/movies.json')
      .then(d => camelCaseMapper(d))
      .then(d => d.slice(0, count))
      .then(delay(time));
  }

  getMovieById(id) {
    return import('../assets/mocks/movies.json')
      .then(d => camelCaseMapper(d))
      .then(d => d.filter(movie => id === movie.id)[0])
      .then(delay(time));
  }

  getCategories() {
    return import('../assets/mocks/categories.json')
      .then(d => camelCaseMapper(d))
      .then(delay(time));
  }

  getGenres() {
    return import('../assets/mocks/genres.json')
      .then(d => camelCaseMapper(d))
      .then(delay(time));
  }

  getCommentsByMovieId(id) {
    return import('../assets/mocks/comments.json')
      .then(d => camelCaseMapper(d))
      .then(delay(time));
  }

  addCommentByMovieId(comment) {
    return new Promise(resolve => resolve(comment)).then(delay(time));
  }

  deleteCommentById(movieId, id) {
    return new Promise(resolve => resolve(`Comment ${id} deleted`)).then(
      delay(time)
    );
  }
}
