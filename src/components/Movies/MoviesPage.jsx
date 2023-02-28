import css from './MoviesPage.module.css';

import React from 'react';
import MoviesList from '../MoviesList/MoviesList';

const MoviesPage = ({ movies, location, search, handleFormSubmit, handleInputChange }) => {
  return (
    <>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <input className={css.input} type="text" value={search} onChange={handleInputChange} />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <MoviesList movies={movies} location={location} />
    </>
  );
};

export default MoviesPage;
