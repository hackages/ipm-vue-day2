import {camelCaseMapper} from '@/shared/util';
import axios from 'axios';

const token = 'fds3424fdsqwjfkldmsq4324fds';
export class ApiService {
  getMovies(count) {
    return axios
      .get('https://hackflix-backend-pmuxoperml.now.sh/movies', {
        params: {count},
      })
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  getMovieById(id) {
    return axios
      .get(`https://hackflix-backend-pmuxoperml.now.sh/movies/${id}`)
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
      .get('https://hackflix-backend-pmuxoperml.now.sh/genres')
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  getComments() {
    return axios
      .get('https://hackflix-backend-pmuxoperml.now.sh/comments')
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  getCommentsById(movieId) {
    return axios
      .get('https://hackflix-backend-pmuxoperml.now.sh/comments', {
        params: {movie_id: movieId},
      })
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  addCommentByMovieId(comment) {
    return axios
      .post(
        'https://hackflix-backend-pmuxoperml.now.sh/comments',
        {
          movie_id: comment.movieId,
          author: comment.author,
          content: comment.content,
        },
        {
          headers: {Authorization: token},
        }
      )
      .then(d => d.data)
      .then(camelCaseMapper);
  }

  deleteCommentById(movieId, id) {
    return axios
      .delete(`https://hackflix-backend-pmuxoperml.now.sh/comments/${id}`, {
        headers: {Authorization: token},
      })
      .then(d => d.data)
      .then(camelCaseMapper);
  }
}
