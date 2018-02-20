export interface Movie {
  voteCount: number;
  id: number;
  video: boolean;
  voteAverage: number;
  title: string;
  popularity: number;
  poster_path: string;
  originalLanguage: 'en';
  original_title: string;
  genreIds: number[];
  backdropPath: string;
  adult: false;
  overview: string;
  releaseDate: string;
}

export interface MovieLite {
  id: number;
  title: string;
  posterFullPath: string;
  overview: string;
}

export interface Category {
  category: string;
  selected: boolean;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Comment {
  id?: number;
  movieId: number;
  author: string;
  content: string;
}
