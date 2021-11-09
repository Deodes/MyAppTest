import {
  moviesFetch,
  moviesFetchSuccess,
  moviesFetchFailed,
  moviesDetailsFetch,
  moviesDetailsFetchSuccess,
  moviesDetailsFetchFailed,
  moviesReviewsFetch,
  moviesReviewsFetchSuccess,
  moviesReviewsFetchFailed,
  moviesCreditsFetch,
  moviesCreditsFetchSuccess,
  moviesCreditsFetchFailed,
} from './actionCreators';
import {apiGetMovies, apiGetDetails, apiGetReviews, apiGetCredits} from './api';
import {API_IMAGE_URL} from 'react-native-dotenv';

export const getMovies = (page = 1) => {
  return async dispatch => {
    dispatch(moviesFetch());

    try {
      const {results} = await apiGetMovies(page);
      const movies = results.map(el => ({
        ...el,
        backdrop_path: API_IMAGE_URL + el.backdrop_path,
        poster_path: API_IMAGE_URL + el.poster_path,
        favorite: false,
      }));
      const payload = {
        movies,
        page,
        isReached: movies.length < 20,
      };
      dispatch(moviesFetchSuccess(payload));
    } catch (err) {
      dispatch(moviesFetchFailed());
    }
  };
};

export const getMoviesDetails = id => {
  return async dispatch => {
    dispatch(moviesDetailsFetch());

    try {
      const results = await apiGetDetails(id);
      dispatch(moviesDetailsFetchSuccess(results));
    } catch (err) {
      dispatch(moviesDetailsFetchFailed());
    }
  };
};

export const getMoviesReviews = id => {
  return async dispatch => {
    dispatch(moviesReviewsFetch());

    try {
      const results = await apiGetReviews(id);
      dispatch(moviesReviewsFetchSuccess(results));
    } catch (err) {
      dispatch(moviesReviewsFetchFailed());
    }
  };
};

export const getMoviesCredits = id => {
  return async dispatch => {
    dispatch(moviesCreditsFetch());

    try {
      const {cast, crew} = await apiGetCredits(id);

      const payload = {
        id,
        cast: cast.map(el => ({
          ...el,
          profile_path: API_IMAGE_URL + el.profile_path,
        })),
        crew,
      };
      dispatch(moviesCreditsFetchSuccess(payload));
    } catch (err) {
      dispatch(moviesCreditsFetchFailed());
    }
  };
};
