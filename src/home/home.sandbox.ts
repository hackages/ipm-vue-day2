import {orderBy} from 'lodash';
import {HomeApiMocksService} from '@/home/home-api-mocks.service';
import {HomeApiService} from '@/home/home-api.service';
import {camelCaseMapper} from '@/shared/util';
import {Movie, Category, Genre} from '@/home/home.type';

const homeService =
  process.env.NODE_ENV === 'production' ? new HomeApiService() : new HomeApiMocksService();

export const getOrderedByTitleMovies = (count: number): Movie[] => {
  return orderBy(camelCaseMapper(homeService.getMovies()).slice(0, count), ['title']);
};

export const getOrderedCategories = (): Category[] => {
  const [all, ...rest] = camelCaseMapper(homeService.getCategories()).reduce(
    (acc, it) => (it.category === 'ALL' ? [it, ...acc] : [...acc, it]),
    []
  );
  return [all, ...orderBy(rest, ['category'])];
};

export const getOrderedGenres = (): Genre[] => {
  return orderBy(camelCaseMapper(homeService.getGenres()), ['id']);
};
