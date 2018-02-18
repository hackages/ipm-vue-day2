import {IHomeApiService} from '@/home/i-home-api.service';
import {Movie, Category, Genre} from '@/home/home.type';

export class HomeApiMocksService implements IHomeApiService {
  getMovies(): Movie[] {
    return require('../assets/mocks/movies.json');
  }

  getCategories(): Category[] {
    return require('../assets/mocks/categories.json');
  }

  getGenres(): Genre[] {
    return require('../assets/mocks/genres.json');
  }
}
