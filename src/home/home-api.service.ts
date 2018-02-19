import {IHomeApiService} from '@/home/i-home-api.service';
import {Movie, Category, Genre} from '@/home/home.type';

export class HomeApiService implements IHomeApiService {
  getMovies(): Movie[] {
    return;
  }

  getCategories(): Category[] {
    return;
  }

  getGenres(): Genre[] {
    return;
  }
}
