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

export default {
  name: 'HfMovieDetails',
  components: {
    HfCommentList,
    HfCommentForm,
  },
  data() {
    return {
      imageUrl: 'https://image.tmdb.org/t/p//w1280',
      movie: null,
      comments: [],
    };
  },
  async created() {
    this.movie = await this.$api
      .getMovieById(+this.$route.params.id)
      .catch(() => this.back());
    this.comments = await this.$api
      .getCommentsById(this.movie.id)
      .catch(() => this.back());
  },
  computed: {
    cover() {
      return this.movie && `${this.imageUrl}${this.movie.backdropPath}`;
    },
  },
  watch: {
    error() {
      this.back();
    },
  },
  methods: {
    back() {
      this.$router.push({path: '/home'});
    },
    onDeleteComment({movieId, id}) {
      this.$api
        .deleteCommentById(movieId, id)
        .then(
          () =>
            (this.comments = this.comments.filter(comment => comment.id !== id))
        );
    },
    onSubmitComment(comment) {
      this.$api
        .addCommentByMovieId(comment)
        .then(newComment => (this.comments = [...this.comments, newComment]));
    },
  },
};
</script>
