<template>
  <section :class="{'filter-is-visible':!toggleSideBar}" class="gallery">
    <hf-movie
      class="movie"
      :key="movie.id"
      v-for="movie in filteredMoviesLite"
      :movie="movie">
    </hf-movie>
  </section>
</template>
<script lang="ts">
import HfMovie from './components/movie.component.vue';
import {MovieLite} from '@/home/home.type';

export default {
  props: {
    filteredMovies: {
      type: Array,
      required: true,
    },
    toggleSideBar: {
      type: Boolean,
      required: true,
    },
  },
  name: 'HfMovieList',
  components: {
    HfMovie,
  },
  data() {
    return {
      baseUrlCDN: 'https://image.tmdb.org/t/p/w500',
    };
  },
  computed: {
    filteredMoviesLite(): MovieLite[] {
      return this.filteredMovies.map(({title, id, posterPath, overview}) => ({
        id,
        title,
        posterFullPath: `${this.baseUrlCDN}${posterPath}`,
        overview,
      }));
    },
  },
};
</script>
