<template>
  <div class="card mb-3 movie-card">
    <div class="card-block"
         v-if="movie">
      <div class="card-bkg">
        <div class="hero-vignette"></div>
        <img alt="Movie Cover"
             class="card-imt-top"
             :src="cover" />
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
        <button class="btn btn-primary"
                @click="back()">
          Back
        </button>
      </div>
      <div class="card-block-footer">
        <div class="comments-block">
          <hf-comment-form :onSubmit="onSubmitComment"></hf-comment-form>
          <div class="movie-comments">
            <hf-comment-list :comments="comments"
                             :onDeteleComment="onDeleteComment"></hf-comment-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HfCommentForm from './components/comment-form.component';
import HfCommentList from './components/comment-list.component';

import {mapActions} from 'vuex';

export default {
  name: 'HfMovieDetails',
  components: {
    HfCommentList,
    HfCommentForm,
  },
  data() {
    return {
      imageUrl: 'https://image.tmdb.org/t/p//w1280',
    };
  },
  created() {
    if (!this.movie) {
      this.LoadMovie(+this.$route.params.id);
    }
    if (this.comments.length === 0) {
      this.LoadCommentsByMovie(+this.$route.params.id);
    }
  },
  computed: {
    movie() {
      return this.$store.getters.getMovieById(+this.$route.params.id);
    },
    cover() {
      return `${this.imageUrl}${(this.movie || {}).backdropPath}`;
    },
    comments() {
      return this.$store.getters.getCommentsByMovie(+this.$route.params.id);
    },
    error() {
      return this.$store.getters.getError;
    },
  },
  watch: {
    error() {
      this.back();
    },
  },
  methods: {
    ...mapActions([
      'LoadMovie',
      'LoadCommentsByMovie',
      'AddCommentByMovie',
      'DelCommentByMovie',
    ]),
    back() {
      this.$router.push({path: '/home'});
    },
    onDeleteComment({movieId, id}) {
      this.DelCommentByMovie({movieId, id});
    },
    onSubmitComment(comment) {
      this.AddCommentByMovie(comment);
    },
  },
};
</script>
