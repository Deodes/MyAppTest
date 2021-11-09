import request from '../network';

export const apiGetMovies = page => request.get('movie/popular', {page});

export const apiGetDetails = movieId => request.get(`movie/${movieId}`);

export const apiGetReviews = movieId => request.get(`movie/${movieId}/reviews`);

export const apiGetCredits = movieId => request.get(`movie/${movieId}/credits`);
