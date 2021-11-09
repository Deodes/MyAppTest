import {
  SELECT_MOVIE,
  TOGGLE_FAVORITE_MOVIE,
  MOVIES_FETCH,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_FAILED,
  MOVIES_DETAILS_FETCH,
  MOVIES_DETAILS_FETCH_SUCCESS,
  MOVIES_DETAILS_FETCH_FAILED,
  MOVIES_REVIEWS_FETCH,
  MOVIES_REVIEWS_FETCH_SUCCESS,
  MOVIES_REVIEWS_FETCH_FAILED,
  MOVIES_CREDITS_FETCH,
  MOVIES_CREDITS_FETCH_SUCCESS,
  MOVIES_CREDITS_FETCH_FAILED,
} from './actionTypes';

const initial = {
  fetching: false,
  movies: [],
  selectedId: null,
  page: 1,
  isReached: false,
};

export const rootReducer = (state = initial, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return {
        ...state,
        selectedId: action.payload,
      };
    case TOGGLE_FAVORITE_MOVIE:
      return {
        ...state,
        movies: state.movies.map(el => {
          if (el.id === action.payload) {
            return {
              ...el,
              favorite: !el.favorite,
            };
          }
          return el;
        }),
      };
    case MOVIES_FETCH:
      return {...state, fetching: true};
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        movies:
          action.payload.page === 1
            ? action.payload.movies
            : [...state.movies, ...action.payload.movies],
        page: action.payload.page,
        isReached: action.payload.isReached,
      };
    case MOVIES_FETCH_FAILED:
      return {...state, fetching: false};
    case MOVIES_DETAILS_FETCH:
      return {
        ...state,
        fetching: true,
      };
    case MOVIES_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        movies: state.movies.map(el => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              details: action.payload,
            };
          }
          return el;
        }),
      };
    case MOVIES_DETAILS_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
      };
    case MOVIES_REVIEWS_FETCH:
      return {
        ...state,
        fetching: true,
      };
    case MOVIES_REVIEWS_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        movies: state.movies.map(el => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              reviews: action.payload.results,
            };
          }
          return el;
        }),
      };
    case MOVIES_REVIEWS_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
      };
    case MOVIES_CREDITS_FETCH:
      return {
        ...state,
        fetching: true,
      };
    case MOVIES_CREDITS_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        movies: state.movies.map(el => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              credits: {
                cast: action.payload.cast,
                crew: action.payload.crew,
              },
            };
          }
          return el;
        }),
      };
    case MOVIES_CREDITS_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
      };
    default:
      return initial;
  }
};
