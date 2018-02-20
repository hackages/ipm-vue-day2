<template>
  <main class="main-content">
        <hf-menubar
          :counter="filteredMovies.length"
          :selectTab="selectTab"
          :categories="categories"
        ></hf-menubar>
          <hf-movie-list
            :toggleSideBar="toggleSideBar"
            :filteredMovies="filteredMovies || []">
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

import {getOrderedByTitleMovies, getOrderedCategories, getOrderedGenres} from './home.sandbox';
import {Movie} from '@/core/api.type';
import {HomeData} from '@/home/home.type';

export default {
  name: 'home',
  components: {
    HfMenubar,
    HfMovieList,
    HfSidebar,
  },
  data(): HomeData {
    return {
      toggleSideBar: true,
      categories: getOrderedCategories(),
      genres: getOrderedGenres(),
      searchValue: '',
      movies: getOrderedByTitleMovies(50),
      filteredMovies: [],
    };
  },
  created() {
    this.filteredMovies = this.movies;
  },
  methods: {
    selectTab(category: string) {
      this.categories = this.categories.map(filter => ({
        ...filter,
        selected: filter.category === category,
      }));
      this.filterMovies();
    },
    filterMovies() {
      const selectedCategory = this.categories.filter(f => f.selected)[0].category;
      this.filteredMovies = this.movies
        .filter(this.filterByCategory(selectedCategory))
        .filter(this.filterByTitle(this.searchValue));
    },
    filterByCategory(selectedCategory: string): (movie: Movie) => boolean {
      return movie =>
        selectedCategory === 'All' ||
        this.movieContainsGenre(movie, this.getGenreId(selectedCategory));
    },
    filterByTitle(title: string): (movie: Movie) => boolean {
      return movie => !title || movie.title.toLowerCase().includes(title.toLowerCase());
    },
    movieContainsGenre(movie: Movie, genreId: number): boolean {
      return movie.genreIds.reduce((contains, next) => contains || next === genreId, false);
    },
    getGenreId(name: string): number {
      return this.genres.filter(genre => genre.name === name)[0].id;
    },
    onClickSideBar(toggle: boolean): void {
      this.toggleSideBar = toggle;
      if (toggle) {
        this.searchValue = '';
        this.filterMovies();
      }
    },
    onSearchSideBar(searchValue: string): void {
      this.searchValue = searchValue;
      this.filterMovies();
    },
  },
};
</script>
