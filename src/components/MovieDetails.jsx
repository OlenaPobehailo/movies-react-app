import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
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

  console.log(id);
  console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to={backLinkRef} >Back</Link>
      <h2>MovieDetails</h2>
      <h3>Title: {movie.title}</h3>
    </>
  );
};

export default MovieDetails;
