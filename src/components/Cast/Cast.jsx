import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import { basePosterUrl, getCast } from '../../services/api';
import css from './Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchMovie = async () => {
      try {
        const data = await getCast(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log(movie);

  return (
    <ul className={css.list}>
      {movie.cast.map(cast => (
        <li className={css.item} key={cast.id}>
          {cast.profile_path ? (
            <img className={css.img} src={`${basePosterUrl}${cast.profile_path}`} alt="poster" />
          ) : (
            <div>
              <FaUser className={css.icon} size={300} color={'d55448'}/>
            </div>
          )}
          <p className={css.text}>{cast.name}</p>

          <p className={css.text}>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
