<template>
  <div class="card mb-3 movie-card">
    <div class="card-block">
      <div class="card-bkg">
        <div class="hero-vignette"></div>
        <img
          alt="Movie Cover"
          class="card-imt-top"
          :src="getCover"
        />
      </div>
      <div class="card-block-detail">
        <h1 class="black">
          {{movie.title}}
        </h1>
        <p class="rating">
          <span>{{movie.voteAverage}}</span> / 10
        </p>
        <p class="date">
          {{movie.releaseDate}}
        </p>
        <p>
          {{movie.overview}}
        </p>
        <button
          class="btn btn-primary"
          @click="back()">
          Back
        </button>
      </div>
      <div class="card-block-footer">
        <div class="comments-block">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {getMovieById} from '../home.sandbox';

export default {
  name: 'movieDetails',
  component: {},
  data() {
    return {
      movie: getMovieById(+this.$route.params.id),
      comments: [],
      imageUrl: 'https://image.tmdb.org/t/p//w1280',
    };
  },
  computed: {
    getCover() {
      return `${this.imageUrl}${this.movie.backdropPath}`;
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>