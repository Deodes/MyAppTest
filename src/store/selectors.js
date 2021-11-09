import {createSelector} from 'reselect';

export const getSelectedMovieSelector = createSelector(
  ({movies}) => movies,
  ({selectedId}) => selectedId,
  (movies, selectedId) => movies.find(el => el.id === selectedId),
);

export const getFavoriteMoviesSelector = createSelector(
  ({movies}) => movies,
  movies => movies.filter(el => el.favorite),
);

export const getMoviesByQuerySelector = query =>
  createSelector(getFavoriteMoviesSelector, movies =>
    movies.filter(el => {
      const idx = el.title.toLowerCase().indexOf(query.toLowerCase());
      if (idx !== -1) {
        return true;
      }
      return false;
    }),
  );
