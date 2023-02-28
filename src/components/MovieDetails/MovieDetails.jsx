import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { basePosterUrl, getMovieById } from '../../services/api';
import calculateUserScore from '../../utils/calculateUserScore';
import css from './MovieDetail.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  const backLinkRef = location.state?.from ?? '/movies';

  // console.log(backLinkRef);

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

  const handleCastClick = () => {
    setShowCast(prev => !prev);
    setShowReviews(false);
  };
  const handleReviewsClick = () => {
    setShowReviews(prev => !prev);
    setShowCast(false);
  };

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

export default MovieDetails;
