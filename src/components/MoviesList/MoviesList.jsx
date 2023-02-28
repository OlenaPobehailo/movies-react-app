import React from 'react'
import { Link } from 'react-router-dom'
import { basePosterUrl } from '../../services/api'
import css from './MoviesList.module.css'

const MoviesList = ({movies, location}) => {
  return (
    <ul className={css.list}>
        {movies.map(movie => (
          <li className={css.item} key={movie.id}>
            <Link className={css.link} to={`/movies/${movie.id}`} state={{ from: location }}>
              <img className={css.img} src={basePosterUrl+movie.poster_path} alt="poster" />
              <div className={css.info}>
                <p className={css.title}>{movie.title}</p>
              </div>
              
            </Link>
          </li>
        ))}
      </ul>

  )
}

export default MoviesList
