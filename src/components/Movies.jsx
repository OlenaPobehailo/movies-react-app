import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../services/api';

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

  console.log('search', search);
  console.log('searchQuery', searchQuery);
  console.log('searchMovies', searchMovies);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={search} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <h2>Movies</h2>

      <ul>
        {searchMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
