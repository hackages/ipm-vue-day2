<template>
  <main class="main-content">
    <hf-menubar :counter="moviesOrderByTitle.length"
                :selectTab="selectTab"
                :categories="categories"></hf-menubar>
    <hf-movie-list :toggleSideBar="toggleSideBar"
                   :movies="moviesOrderByTitle">
    </hf-movie-list>
    <hf-sidebar :onClick="onClickSideBar"
                v-model="searchValue"
                :toggle="toggleSideBar">
    </hf-sidebar>
  </main>
</template>

<script>
import HfMenubar from './components/menubar.component';
import HfMovieList from './movie-list/movie-list.component';
import HfSidebar from './components/sidebar.component';

import {orderBy} from 'lodash';
import {mapGetters, mapActions, mapMutations} from 'vuex';
import {UDAPTE_SELECTED_CATEGORY} from '../core/state/modules/categories';

export default {
  name: 'HfHome',
  components: {
    HfMenubar,
    HfMovieList,
    HfSidebar,
  },
  data() {
    return {
      toggleSideBar: true,
      searchValue: '',
    };
  },
  created() {
    // TODO: LoadMovies, LoadCategories, LoadGenres from vuex
    this.LoadMovies(50);
    this.LoadCategories();
    this.LoadGenres();
  },
  computed: {
    ...mapGetters({
      categories: 'getCategories',
      movies: 'getMovies',
      genres: 'getGenres',
    }),
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
  },
  methods: {
    ...mapActions(['LoadMovies', 'LoadCategories', 'LoadGenres']),
    ...mapMutations({SelectedCategory: UDAPTE_SELECTED_CATEGORY}),
    selectTab(category) {
      this.SelectedCategory(category);
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
  },
};
</script>
