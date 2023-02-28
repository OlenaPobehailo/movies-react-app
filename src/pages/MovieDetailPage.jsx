import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { basePosterUrl } from '../services/api';
import calculateUserScore from '../utils/calculateUserScore';
import css from './MovieDetailPage.module.css';

const MovieDetailPage = ({
  movie,
  id,
  showCast,
  showReviews,
  handleCastClick,
  handleReviewsClick,
  backLinkRef,
  location,
}) => {
  const { title, vote_average, vote_count, overview, genres, poster_path, release_date } = movie;

  const genreList = genres.map(genre => genre.name).join(', ');

  const posterPath = poster_path ? basePosterUrl + poster_path : null;
  const year = new Date(release_date).getFullYear();

  return (
    <>
      <Link to={backLinkRef} className={css.backLink}>
        Back
      </Link>

      <div className={css.container}>
        <img className={css.poster} src={posterPath} alt={title} />

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
        <Link
          className={css.link}
          to={`/movies/${id}/cast`}
          onClick={handleCastClick}
          state={{ from: location.state?.from }}
        >
          Cast
        </Link>
        <Link
          className={css.link}
          to={`/movies/${id}/reviews`}
          onClick={handleReviewsClick}
          state={{ from: location.state?.from }}
        >
          Reviews
        </Link>

        {showCast && <Outlet />}
        {showReviews && <Outlet />}
      </div>
    </>
  );
};

export default MovieDetailPage;
