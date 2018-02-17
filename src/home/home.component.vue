<template>
  <main>
      <hf-header></hf-header>
      <div class="main-content">
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
      </div>
    </main>
</template>

<script>
import HfHeader from './components/header.component';
import HfMenubar from './components/menubar.component';
import HfMovieList from './movie-list/movie-list.component';
import HfSidebar from './components/sidebar.component';

import {getOrderedByTitleMovies, getOrderedCategories, getOrderedGenres} from './home.sandbox';

export default {
  name: 'home',
  components: {
    HfHeader,
    HfMenubar,
    HfMovieList,
    HfSidebar
  },
  data() {
    return {
      toggleSideBar: true,
      categories: getOrderedCategories(),
      genres: getOrderedGenres(),
      searchValue: '',
      movies: getOrderedByTitleMovies(50),
      filteredMovies: []
    };
  },
  created() {
    this.filteredMovies = this.movies;
  },
  methods: {
    selectTab: function(category) {
      this.categories = this.categories.map(filter => ({
        ...filter,
        selected: filter.category === category
      }));
      this.filterMovies();
    },
    filterMovies: function() {
      const selectedCategory = this.categories.filter(f => f.selected)[0].category;
      this.filteredMovies = this.movies
        .filter(this.filterByCategory(selectedCategory))
        .filter(this.filterByTitle(this.searchValue));
    },
    filterByCategory: function(selectedCategory) {
      return movie =>
        selectedCategory === 'All' ||
        this.movieContainsGenre(movie, this.getGenreId(selectedCategory));
    },
    filterByTitle: function(title) {
      return movie => !title || movie.title.toLowerCase().includes(title.toLowerCase());
    },
    movieContainsGenre: function(movie, genreId) {
      return movie.genreIds.reduce((contains, next) => contains || next === genreId, false);
    },
    getGenreId: function(name) {
      return this.genres.filter(genre => genre.name === name)[0].id;
    },
    onClickSideBar: function(toggle) {
      this.toggleSideBar = toggle;
      if (toggle) {
        this.searchValue = '';
        this.filterMovies();
      }
    },
    onSearchSideBar: function(searchValue) {
      this.searchValue = searchValue;
      this.filterMovies();
    }
  }
};
</script>