<template>
  <section :class="{'filter-is-visible':!navClosed}" class="gallery">
    <hf-movie
      class="movie"
      :key="movie"
      v-for="movie in filteredMovies"
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
  }
};
</script>