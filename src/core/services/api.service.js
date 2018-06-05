import {camelCaseMapper} from '@/shared/util';
import axios from 'axios';
import authService from './authentication.service';
import settingsProvider from './settings.provider';

export class ApiService {
  apiUrl = settingsProvider.getBackendUrl();

  getMovies(count) {
    return axios
      .get(`${this.apiUrl}/movies`, {
        params: {count},
      })
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  getMovieById(id) {
    return axios
      .get(`${this.apiUrl}/movies/${id}`)
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  getCategories() {
    return Promise.resolve(require('../../assets/mocks/categories.json')).then(
      camelCaseMapper
    );
  }

  getGenres() {
    return axios
      .get(`${this.apiUrl}/genres`)
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  getComments() {
    return axios
      .get(`${this.apiUrl}/comments`)
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  getCommentsById(movieId) {
    return axios
      .get(`${this.apiUrl}/comments`, {
        params: {movie_id: movieId},
      })
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  addCommentByMovieId(comment) {
    return axios
      .post(
        `${this.apiUrl}/comments`,
        {
          movie_id: comment.movieId,
          author: comment.author,
          content: comment.content,
        },
        {
          headers: {Authorization: authService.getToken()},
        }
      )
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  deleteCommentById(movieId, id) {
    return axios
      .delete(`${this.apiUrl}/comments/${id}`, {
        headers: {Authorization: authService.getToken()},
      })
      .then(d => d.data)
      .then(camelCaseMapper);
  }
}
