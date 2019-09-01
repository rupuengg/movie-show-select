import { SEARCH_MOVIE, MOVIE_LIST, FETCH_MVOIE } from '../Actions/Types';

const initialState = {
  search_history: [],
  search_text: '',
  loading: false,
  movies: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        search_text: action.payload,
        loading: false
      }
    case MOVIE_LIST:
      return {
        ...state,
        movies: action.payload,
        search_history: state.search_history.concat(state.search_text)
      }
    case FETCH_MVOIE:
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;
  }
}