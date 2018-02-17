import {HomeApiMocksService} from './home-api-mocks.service';
import {HomeApiService} from './home-api.service';

const homeService =
  process.env.NODE_ENV === 'production' ? new HomeApiService() : new HomeApiMocksService();

export const getOrderedByTitleMovies = count => {
  return homeService.getOrderedByTitleMovies(count);
};

export const getOrderedCategories = () => {
  return homeService.getOrderedCategories();
};

export const getOrderedGenres = () => {
  return homeService.getOrderedGenres();
};
