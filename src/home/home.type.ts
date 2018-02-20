import {Category, Genre, Movie} from '@/core/api.type';

export interface HomeData {
  toggleSideBar: boolean;
  categories: Category[];
  genres: Genre[];
  searchValue: string;
  movies: Movie[];
  filteredMovies: Movie[];
}
