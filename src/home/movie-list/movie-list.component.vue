<template>
  <section :class="{'filter-is-visible':!navClosed}" class="gallery">
    <hf-movie
      class="movie"
      :key="movie.id"
      v-for="movie in filteredMoviesLite"
      :movie="movie">
    </hf-movie>
  </section>
</template>

<script>
import HfMovie from './components/movie.component';

export default {
  props: ['filteredMovies', 'navClosed', 'baseUrlCDN'],
  name: 'HfMovieList',
  components: {
    HfMovie
  },
  computed: {
    filteredMoviesLite: function() {
      return this.filteredMovies.map(({title, id, posterPath, overview}) => ({
        id,
        title,
        posterFullPath: `${this.baseUrlCDN}${posterPath}`,
        overview
      }));
    }
  }
};
</script>