import React from 'react';
import Skeleton from 'react-loading-skeleton';
import MoviesList from '../components/MoviesList/MoviesList';
import css from './HomePage.module.css';

const HomePage = ({ movies, location }) => {
  return (
    <div className={css.container}>
      <h1 className={css.pageTitle}>Trending today</h1>
      {movies.length > 0 ? (
        <MoviesList movies={movies} location={location} />
      ) : (
        <Skeleton count={10} />
      )}
    </div>
  );
};

export default HomePage;
