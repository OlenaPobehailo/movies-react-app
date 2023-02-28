import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { basePosterUrl, getMovieById } from '../../services/api';
import calculateUserScore from '../../utils/calculateUserScore';
import css from './MovieDetail.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showRewiews, setShowReviews] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  const backLinkRef = location.state?.from ?? '/movies';

  console.log(backLinkRef);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  const { title, vote_average, vote_count, overview, genres, poster_path, release_date } = movie;

  const genreList = genres.map(genre => genre.name).join(', ');

  const posterPath = poster_path ? basePosterUrl + poster_path : null;
  const year = new Date(release_date).getFullYear();

  console.log(movie);
  // console.log(id);
  // console.log(genres);
  // console.log(genres[0].name);
  // console.log(genreList);

  return (
    <>
      <Link to={backLinkRef} className={css.backLink}>
        Back
      </Link>

      <div className={css.container}>
        <img src={posterPath} alt={title} />

        <div className={css.info}>
          <h2 className={css.title}>
            {title} ({year})
          </h2>
          <p className={css.text}>User score: {calculateUserScore(vote_average, vote_count)} %</p>
          <h3 className={css.subtitle}>Overview</h3>
          <p className={css.text}>{overview ? overview : 'no information available'}</p>
          <h3 className={css.subtitle}>Genres</h3>
          <p className={css.text}>{genreList ? genreList : 'no information available'}</p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <Link className={css.link}>Cast</Link>
        <Link className={css.link}>Reviews</Link>
      </div>
    </>
  );
};

export default MovieDetails;
