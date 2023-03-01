import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/api';
import MovieDetailPage from '../../pages/MovieDetailPage';
import Loader from '../Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  const backLinkRef = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <Loader />;
  }

  console.log(movie);

  const handleCastClick = () => {
    setShowCast(prev => !prev);
    setShowReviews(false);
  };
  const handleReviewsClick = () => {
    setShowReviews(prev => !prev);
    setShowCast(false);
  };

  return (
    <MovieDetailPage
      movie={movie}
      id={id}
      showCast={showCast}
      showReviews={showReviews}
      handleCastClick={handleCastClick}
      handleReviewsClick={handleReviewsClick}
      location={location}
      backLinkRef={backLinkRef}
    />
  );
};

export default MovieDetails;
