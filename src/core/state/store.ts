import Vue from 'vue';
import Vuex from 'vuex';
import * as movies from './movies';
import * as categories from './categories';
import * as genres from './genres';
import {ApiService} from '@/core/api.service';
import {ApiMocksService} from '@/core/api-mocks.service';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export const apiService =
  process.env.NODE_ENV === 'production'
    ? new ApiService()
    : new ApiMocksService();

export default new Vuex.Store({
  modules: {
    movies,
    categories,
    genres,
  },
  strict: debug,
});
