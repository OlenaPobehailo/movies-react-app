import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Movies from './Movies/Movies';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id/*" element={<MovieDetails />} >
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
      </Route>
    </Routes>
  );
};
