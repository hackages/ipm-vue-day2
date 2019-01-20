import {ApiMocksService} from '@/core/services/api-mocks.service.js';
import {ApiService} from '@/core/services/api.service.js';

export default {
  configuration: null,
  loadConfig() {
    this.configuration = require(`../../assets/settings/${
      process.env.NODE_ENV
    }.json`);
  },
  getBackendUrl() {
    this.configuration.backendUrl;
  },
  getAccess() {
    return this.configuration.access;
  },
  initApiService() {
    return this.getAccess().api ? new ApiService() : new ApiMocksService();
  },
};
