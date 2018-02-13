<template>
  <main>
      <hf-header :logo="logo"></hf-header>
      <div class="main-content">
        <hf-menubar
          :counter="filteredMovies.length"
          :selectTab="selectTab"
          :categories="categories"
        ></hf-menubar>
          <hf-movie-list
            :baseUrlCDN="pictureCdnUrl"
            :navClosed="navClosed"
            :filteredMovies="filteredMovies || []">
          </hf-movie-list>
      </div>
    </main>
</template>

<script>
import HfHeader from './components/header.component';
import HfMenubar from './components/menubar.component';
import HfMovieList from './movie-list/movie-list.component';
import header from '@/assets/images/hackflix_logo.svg';

export default {
  name: 'home',
  components: {
    HfHeader,
    HfMenubar,
    HfMovieList
  },
  data() {
    return {
      logo: header,
      pictureCdnUrl: 'https://image.tmdb.org/t/p/w500',
      navClosed: true,
      categories: [
        {category: 'All', selected: true},
        {category: 'Action', selected: false},
        {category: 'Drama', selected: false},
        {category: 'Thriller', selected: false},
        {category: 'Adventure', selected: false},
        {category: 'Comedy', selected: false}
      ],
      genres: [
        {
          id: 28,
          name: 'Action'
        },
        {
          id: 12,
          name: 'Adventure'
        },
        {
          id: 16,
          name: 'Animation'
        },
        {
          id: 35,
          name: 'Comedy'
        },
        {
          id: 80,
          name: 'Crime'
        },
        {
          id: 99,
          name: 'Documentary'
        },
        {
          id: 18,
          name: 'Drama'
        },
        {
          id: 10751,
          name: 'Family'
        },
        {
          id: 14,
          name: 'Fantasy'
        },
        {
          id: 36,
          name: 'History'
        },
        {
          id: 27,
          name: 'Horror'
        },
        {
          id: 10402,
          name: 'Music'
        },
        {
          id: 9648,
          name: 'Mystery'
        },
        {
          id: 10749,
          name: 'Romance'
        },
        {
          id: 878,
          name: 'Science Fiction'
        },
        {
          id: 10770,
          name: 'TV Movie'
        },
        {
          id: 53,
          name: 'Thriller'
        },
        {
          id: 10752,
          name: 'War'
        },
        {
          id: 37,
          name: 'Western'
        }
      ],
      searchValue: '',
      movies: [
        {
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
        {
          vote_count: 2273,
          id: 283366,
          video: false,
          vote_average: 6.5,
          title: "Miss Peregrine's Home for Peculiar Children",
          popularity: 20.415854,
          posterPath: '/AvekzUdI8HZnImdQulmTTmAZXrC.jpg',
          original_language: 'en',
          original_title: "Miss Peregrine's Home for Peculiar Children",
          genre_ids: [18, 14, 12],
          backdrop_path: '/9BVHn78oQcFCRd4M3u3NT7OrhTk.jpg',
          adult: false,
          overview:
            'A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.',
          release_date: '2016-09-28'
        }
      ],
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
      return movie.genre_ids.reduce((contains, next) => contains || next === genreId, false);
    },
    getGenreId: function(name) {
      return this.genres.filter(genre => genre.name === name)[0].id;
    }
  }
};
</script>