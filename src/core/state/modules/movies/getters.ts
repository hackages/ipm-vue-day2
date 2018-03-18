export const getters = {
  getMovies: state => Object.values(state.movies),
  getMovieById: state => id => state.movies[id],
  getError: state => state.error,
};
