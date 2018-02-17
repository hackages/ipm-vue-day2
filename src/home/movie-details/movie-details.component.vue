<template>
  <div class="card mb-3 movie-card">
    <div class="card-block">
      <div class="card-bkg">
        <div class="hero-vignette"></div>
        <img
          alt="Movie Cover"
          class="card-imt-top"
          [src]="getCover(movie.backdrop_path)"
        />
      </div>
      <div class="card-block-detail">
        <h1 class="black">
          {{movie.title}}
        </h1>
        <p class="rating">
          <span>{{movie.vote_average}}</span> / 10
        </p>
        <p class="date">
          {{movie.release_date}}
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
          <hf-comment-form ></hf-comment-form>
          <div class="movie-comments">
            <hf-comment-list ></hf-comment-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movieDetails',
  component: {
    HfCommentForm,
    HfCommentList
  },
  data() {
    return {
      movie: {
        vote_count: 3658,
        id: 285,
        video: false,
        vote_average: 6.9,
        title: "Pirates of the Caribbean: At World's End",
        popularity: 20.793915,
        posterPath: '/bXb00CkHqx7TPchTGG131sWV59y.jpg',
        original_language: 'en',
        original_title: "Pirates of the Caribbean: At World's End",
        genre_ids: [12, 14, 28],
        backdrop_path: '/8ZgpAftUiYTU76IhUADITa3Ur9n.jpg',
        adult: false,
        overview:
          'Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.',
        release_date: '2007-05-19'
      },
      comments: []
    };
  }
};
</script>