import {camelCaseMapper} from '../shared/util';
import {orderBy} from 'lodash';
export class HomeApiMocksService {
  getOrderedByTitleMovies(count) {
    return orderBy(camelCaseMapper(require('../assets/mocks/movies.json')).slice(0, count), [
      'title'
    ]);
  }

  getOrderedCategories() {
    const [all, ...rest] = camelCaseMapper(require('../assets/mocks/categories.json')).reduce(
      (acc, it) => (it.category === 'ALL' ? [it, ...acc] : [...acc, it]),
      []
    );
    return [all, ...orderBy(rest, ['category'])];
  }

  getOrderedGenres() {
    return orderBy(camelCaseMapper(require('../assets/mocks/genres.json')), ['id']);
  }
}
