import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchMovie = async () => {
      try {
        const data = await getReviews(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  console.log(movie);

  return (
    <ul className={css.list}>
      {movie &&
        movie.results.map(review => (
          <li className={css.item} key={review.id}>
            <p className={css.author}>{`Author: ${review.author}`}</p>
            <p className={css.content}>{review.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
