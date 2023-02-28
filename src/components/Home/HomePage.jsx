import React from 'react';
import MoviesList from '../MoviesList/MoviesList';
import css from './HomePage.module.css';

const HomePage = ({ movies, location }) => {
  return (
    <div className={css.container}>
      <h1 className={css.pageTitle}>Trending today</h1>
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default HomePage;
