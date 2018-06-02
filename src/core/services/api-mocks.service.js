import {camelCaseMapper, delay} from '@/shared/util';

const time = 1000;

export class ApiMocksService {
  getMovies(count) {
    return Promise.resolve(require('../../assets/mocks/movies.json'))
      .then(d => camelCaseMapper(d))
      .then(d => d.slice(0, count))
      .then(delay(time));
  }

  getMovieById(id) {
    return Promise.resolve(require('../../assets/mocks/movies.json'))
      .then(camelCaseMapper)
      .then(d => d.filter(movie => id === movie.id)[0])
      .then(delay(time));
  }

  getCategories() {
    return Promise.resolve(require('../../assets/mocks/categories.json'))
      .then(camelCaseMapper)
      .then(delay(time));
  }

  getGenres() {
    return Promise.resolve(require('../../assets/mocks/genres.json'))
      .then(camelCaseMapper)
      .then(delay(time));
  }

  getComments() {
    return Promise.resolve(require('../../assets/mocks/comments.json'))
      .then(camelCaseMapper)
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
