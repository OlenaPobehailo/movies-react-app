import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { basePosterUrl, getTrendingMovies } from '../../services/api';
import HomePage from '../../pages/HomePage';
// import css from './Home.module.css';
import Loader from '../Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendingMovies();
      setTrendingMovies(data);
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  console.log(trendingMovies);
  console.log(basePosterUrl);

  return (
    <div>
      {isLoading && <Loader  />}
      {!isLoading && <HomePage movies={trendingMovies} location={location} />}
    </div>
  );
};

export default Home;
