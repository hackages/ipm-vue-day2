<template>
  <router-link
    :to="{name:'details' , params: {id: movie.id}}"
    @mouseenter="toggleHoverForTheMovie()"
    @mouseleave="toggleHoverForTheMovie()">
    <img
      :alt="movie.title + 'cover' "
      :src="movie.posterFullPath"
    />
    <hf-movie-hover-info
      :movie="movie"
      :isContainerHovered="isHovered">
    </hf-movie-hover-info>
  </router-link>
</template>

<script>
import HfMovieHoverInfo from './movie-hover-info.component';

export default {
  name: 'movie',
  props: {movie: {type: Object, required: true}},
  components: {
    HfMovieHoverInfo,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    toggleHoverForTheMovie() {
      this.isHovered = !this.isHovered;
    },
  },
};
</script>
