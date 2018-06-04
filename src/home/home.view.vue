<template>
  <main class="main-content">
    <!--<hf-menubar>-->
    <div class="tab-filter-wrapper">
      <div class="tab-filter">
        <div class="filters">
          <ul class="filters-list">
            <li v-for="category in categories"
                :key="category.category"
                @click="selectTab(category.category)">
              <a :class="{'selected': category.selected}">{{category.category}}</a>
            </li>
          </ul>
          <ul class="misc">
            <li class="counter">
              <a>{{moviesOrderByTitle.length}}</a>
            </li>
            <li :to="'/stats'">
              <a>Stats</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--</hf-menubar>-->

    <!--<hf-movie-list >-->
    <section :class="{'filter-is-visible':!toggleSideBar}"
             class="gallery">
      <!--<hf-movie class="movie">-->
      <router-link class="movie"
                   :key="movie.id"
                   v-for="movie in moviesWithPosterFullPath"
                   :to="{name:'details' , params: {id: movie.id}}"
                   @mouseenter="toggleHoverForTheMovie()"
                   @mouseleave="toggleHoverForTheMovie()">
        <img :alt="movie.title + 'cover' "
             :src="movie.posterFullPath" />
        <!--<hf-movie-hover-info>-->
        <div :class="{'show-movie-body': isHovered}"
             class="movie-body">
          <h1>{{movie.title}}</h1>
          <p>{{movie.overview}}</p>

          <button class="btn btn-danger">
            Remove from cart
          </button>
          <button class="btn add">
            Add to cart
          </button>
          <router-link class="btn btn-link"
                       :to="{name:'details' , params: {id:movie.id}}"
                       tag="button">See the details
          </router-link>
        </div>
        <!--</hf-movie-hover-info>-->
      </router-link>
      <!--</hf-movie>-->
    </section>
    <!--</hf-movie-list>-->
    <hf-sidebar :onClick="onClickSideBar"
                v-model="searchValue"
                :toggle="toggleSideBar">
    </hf-sidebar>
  </main>
</template>

<script>
import {orderBy} from 'lodash';
import HfSidebar from './components/sidebar.component';
import settingsProvider from '@/core/services/settings.provider.js';

export default {
  name: 'HfHome',
  components: {
    HfSidebar,
  },
  data() {
    return {
      toggleSideBar: true,
      searchValue: '',
      baseUrlCDN: 'https://image.tmdb.org/t/p/w500',
      isHovered: false,
      categories: [],
      genres: [],
      movies: [],
    };
  },
  async created() {
    this.movies = await settingsProvider.apiService.getMovies(50);
    this.categories = await settingsProvider.apiService.getCategories();
    this.genres = await settingsProvider.apiService.getGenres();
  },
  computed: {
    filteredMovies() {
      const filteredCategory = this.categories.filter(f => f.selected)[0];
      const selectedCategory = filteredCategory
        ? filteredCategory.category
        : null;
      return this.movies
        .filter(this.filterByCategory(selectedCategory))
        .filter(this.filterByTitle(this.searchValue));
    },
    moviesOrderByTitle() {
      return orderBy(this.filteredMovies, ['title']);
    },
    moviesWithPosterFullPath() {
      return this.moviesOrderByTitle.map(
        ({title, id, posterPath, overview}) => ({
          id,
          title,
          posterFullPath: `${this.baseUrlCDN}${posterPath}`,
          overview,
        })
      );
    },
  },
  methods: {
    selectTab(category) {
      this.categories = this.categories.map(filter => ({
        ...filter,
        selected: filter.category === category,
      }));
    },
    filterByCategory(selectedCategory) {
      return movie =>
        selectedCategory === 'All' ||
        this.movieContainsGenre(movie, this.getGenreId(selectedCategory));
    },
    filterByTitle(title) {
      return movie =>
        !title || movie.title.toLowerCase().includes(title.toLowerCase());
    },
    movieContainsGenre(movie, genreId) {
      return movie.genreIds.reduce(
        (contains, next) => contains || next === genreId,
        false
      );
    },
    getGenreId(name) {
      const filteredGenre = this.genres.filter(genre => genre.name === name)[0];
      return filteredGenre ? filteredGenre.id : null;
    },
    onClickSideBar(toggle) {
      this.toggleSideBar = toggle;
    },
    onSearchSideBar(searchValue) {
      this.searchValue = searchValue;
    },
    toggleHoverForTheMovie() {
      this.isHovered = !this.isHovered;
    },
  },
};
</script>
