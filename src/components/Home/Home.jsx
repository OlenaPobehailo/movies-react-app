import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { basePosterUrl, getTrendingMovies } from '../../services/api';
import HomePage from '../../pages/HomePage';

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

  return <HomePage movies={trendingMovies} location={location} />;
};

export default Home;
