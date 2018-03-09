import {ApiService} from '@/core/api.service';
import {ApiMocksService} from '@/core/api-mocks.service';

export default {
  configuration: null,
  apiService: null,
  loadConfig(): void {
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
