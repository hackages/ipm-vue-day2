<template>
  <main class="main-content">
        <hf-menubar
          :counter="moviesOrderByTitle.length"
          :selectTab="selectTab"
          :categories="categories"
        ></hf-menubar>
          <hf-movie-list
            :toggleSideBar="toggleSideBar"
            :movies="moviesOrderByTitle">
          </hf-movie-list>
          <hf-sidebar
            :onClick="onClickSideBar"
            :onSearch="onSearchSideBar"
            :searchValue="searchValue"
            :toggle="toggleSideBar">
          </hf-sidebar>
    </main>
</template>

<script lang="ts">
import HfMenubar from './components/menubar.component.vue';
import HfMovieList from './movie-list/movie-list.component.vue';
import HfSidebar from './components/sidebar.component.vue';

import homeSandbox from './home.sandbox';
import {Movie} from '@/core/api.type';
import {HomeData} from '@/home/home.type';
import {orderBy} from 'lodash';
import {mapGetters, mapActions, mapMutations} from 'vuex';
import {UDAPTE_SELECTED_CATEGORY} from '../core/state/categories';

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
    ...mapMutations({SelectedCategory: 'UDAPTE_SELECTED_CATEGORY'}),
    selectTab(category: string) {
      this.SelectedCategory(category);
    },
    filterByCategory(selectedCategory: string): (movie: Movie) => boolean {
      return movie =>
        selectedCategory === 'All' ||
        this.movieContainsGenre(movie, this.getGenreId(selectedCategory));
    },
    filterByTitle(title: string): (movie: Movie) => boolean {
      return movie =>
        !title || movie.title.toLowerCase().includes(title.toLowerCase());
    },
    movieContainsGenre(movie: Movie, genreId: number): boolean {
      return movie.genreIds.reduce(
        (contains, next) => contains || next === genreId,
        false
      );
    },
    getGenreId(name: string): number {
      const filteredGenre = this.genres.filter(genre => genre.name === name)[0];
      return filteredGenre ? filteredGenre.id : null;
    },
    onClickSideBar(toggle: boolean): void {
      this.toggleSideBar = toggle;
    },
    onSearchSideBar(searchValue: string): void {
      this.searchValue = searchValue;
    },
  },
};
</script>
