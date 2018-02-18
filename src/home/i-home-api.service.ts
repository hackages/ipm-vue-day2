import {Movie, Category, Genre} from '@/home/home.type';

export abstract class IHomeApiService {
  abstract getMovies(): Movie[];
  abstract getCategories(): Category[];
  abstract getGenres(): Genre[];
}
