export const getters = {
  getMovies: state => state.movies,
  getMovieById: state => id => state.movies.filter(movie => id === movie.id)[0],
  getError: state => state.error,
};
