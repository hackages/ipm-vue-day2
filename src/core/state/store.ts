import Vue from 'vue';
import Vuex from 'vuex';
import * as movies from './movies';
import * as categories from './categories';
import * as genres from './genres';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    movies,
    categories,
    genres,
  },
  strict: debug,
});
