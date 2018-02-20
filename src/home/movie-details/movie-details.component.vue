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
        <hf-comment-form :onSubmit="onSubmitComment"></hf-comment-form>
          <div class="movie-comments">
            <hf-comment-list :comments="comments" :onDeteleComment="onDeleteComment"></hf-comment-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HfCommentForm from './components/comment-form.component.vue';
import HfCommentList from './components/comment-list.component.vue';

import {
  getMovieById,
  getCommentsById,
  deleteCommentById,
  addCommentByMovieId,
} from '../home.sandbox';

export default {
  name: 'HfMovieDetails',
  components: {
    HfCommentList,
    HfCommentForm,
  },
  data() {
    return {
      movie: getMovieById(+this.$route.params.id),
      comments: getCommentsById(+this.$route.params.id),
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
    onDeleteComment({id}) {
      deleteCommentById(+comment.id);
      this.comments = this.comments.filter(comment => comment.id !== id);
    },
    onSubmitComment(comment) {
      this.comments = [...this.comments, comment];
      addCommentByMovieId(comment);
    },
  },
};
</script>