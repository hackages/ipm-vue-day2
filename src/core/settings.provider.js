import {ApiMocksService} from '@/core/api-mocks.service.js';
import {ApiService} from '@/core/api.service.js';

export default {
  configuration: null,
  apiService: null,
  loadConfig() {
    this.configuration = require(`../assets/settings/${
      process.env.NODE_ENV
    }.json`);
    this.initApiService();
  },
  getBackendUrl() {
    this.configuration.backendUrl;
  },
  getAccess() {
    return this.configuration.access;
  },
  initApiService() {
    this.apiService = this.getAccess().api
      ? new ApiService()
      : new ApiMocksService();
  },
};
