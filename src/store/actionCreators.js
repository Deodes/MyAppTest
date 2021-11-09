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

export const selectMovie = payload => {
  return {type: SELECT_MOVIE, payload};
};

export const toggleFavoriteMovie = payload => {
  return {type: TOGGLE_FAVORITE_MOVIE, payload};
};

export const moviesFetch = payload => {
  return {type: MOVIES_FETCH, payload};
};

export const moviesFetchSuccess = payload => {
  return {type: MOVIES_FETCH_SUCCESS, payload};
};

export const moviesFetchFailed = payload => {
  return {type: MOVIES_FETCH_FAILED, payload};
};

export const moviesDetailsFetch = payload => {
  return {type: MOVIES_DETAILS_FETCH, payload};
};

export const moviesDetailsFetchSuccess = payload => {
  return {type: MOVIES_DETAILS_FETCH_SUCCESS, payload};
};

export const moviesDetailsFetchFailed = payload => {
  return {type: MOVIES_DETAILS_FETCH_FAILED, payload};
};

export const moviesReviewsFetch = payload => {
  return {type: MOVIES_REVIEWS_FETCH, payload};
};

export const moviesReviewsFetchSuccess = payload => {
  return {type: MOVIES_REVIEWS_FETCH_SUCCESS, payload};
};

export const moviesReviewsFetchFailed = payload => {
  return {type: MOVIES_REVIEWS_FETCH_FAILED, payload};
};

export const moviesCreditsFetch = payload => {
  return {type: MOVIES_CREDITS_FETCH, payload};
};

export const moviesCreditsFetchSuccess = payload => {
  return {type: MOVIES_CREDITS_FETCH_SUCCESS, payload};
};

export const moviesCreditsFetchFailed = payload => {
  return {type: MOVIES_CREDITS_FETCH_FAILED, payload};
};
