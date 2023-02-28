import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { basePosterUrl, getTrendingMovies } from '../../services/api';
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
  console.log(trendingMovies[0]);
  //console.log(trendingMovies[0].poster_path);

  console.log(basePosterUrl);
  //console.log(basePosterUrl+trendingMovies[0].poster_path);

  return (
    <div className={css.container}>
      <h1 className={css.pageTitle}>Trending today</h1>
      <ul className={css.list}>
        {trendingMovies.map(movie => (
          <li className={css.item} key={movie.id}>
            <Link className={css.link} to={`/movies/${movie.id}`} state={{ from: location }}>
              <img className={css.img} src={basePosterUrl+movie.poster_path} alt="" />
              <div className={css.info}>
                <p className={css.title}>{movie.title}</p>
              </div>
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
