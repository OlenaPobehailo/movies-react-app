import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { basePosterUrl, getMoviesByQuery } from '../../services/api';
import MoviesList from '../MoviesList/MoviesList';
import css from './Movies.module.css';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({
    search: '',
  });

  const searchQuery = searchParams.get('search');

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams(searchParams => ({
      ...searchParams,
      search: search,
    }));
    setSearch('');
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMoviesByQuery(searchQuery);
      setSearchMovies(data);
    };

    fetchMovies();
  }, [searchQuery]);

  // console.log('search', search);
  // console.log('searchQuery', searchQuery);
  console.log('searchMovies', searchMovies);

  return (
    <>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <input className={css.input} type="text" value={search} onChange={handleInputChange} />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <MoviesList movies={searchMovies} location={location} />
    </>
  );
};

export default Movies;
