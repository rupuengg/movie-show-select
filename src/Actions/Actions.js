import { SEARCH_MOVIE, MOVIE_LIST, FETCH_MVOIE } from './Types';
import { API_URL } from '../Config/constants';

export const searchMovies = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const movieList = text => dispatch => {
  fetch(`${API_URL}&s=${text}`)
    .then(res => res.json())
    .then(res => dispatch({
      type: MOVIE_LIST,
      payload: res.Search
    }))
    .catch(err => console.log(err));
}

export const fetchMovie = id => dispatch => {
  fetch(`${API_URL}&i=${id}`)
    .then(res => res.json())
    .then(res => dispatch({
      type: FETCH_MVOIE,
      payload: res
    }))
    .catch(err => console.log(err));
}