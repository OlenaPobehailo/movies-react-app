import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../../services/api';
import MoviesPage from '../../pages/MoviesPage';
import Loader from '../Loader/Loader';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    };

    fetchMovies();
  }, [searchQuery]);

  // console.log('search', search);
  // console.log('searchQuery', searchQuery);
  console.log('searchMovies', searchMovies);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <MoviesPage
          movies={searchMovies}
          location={location}
          search={search}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      )}
    </>
  );
};

export default Movies;
