import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { basePosterUrl, getTrendingMovies } from '../../services/api';
import MoviesList from '../MoviesList/MoviesList';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendingMovies();
      setTrendingMovies(data);
    };

    fetchMovies();
  }, []);

  console.log(trendingMovies);

  console.log(basePosterUrl);
  //console.log(basePosterUrl+trendingMovies[0].poster_path);

  return (
    <div className={css.container}>
      <h1 className={css.pageTitle}>Trending today</h1>
      <MoviesList movies={trendingMovies} location={location} />
    </div>
  );
};

export default Home;
