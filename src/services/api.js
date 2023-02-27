import axios from 'axios';

const API_KEY = '9ce8efc3ff8d8ed00ad4e59e8fd58805';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY };

export const basePosterUrl = 'https://image.tmdb.org/t/p/w500';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day`);
  return response.data.results;
};

export const getMoviesByQuery = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
};


export const getMovieById = async id => {
  const response = await axios.get(
    `/movie/${id}
        `
  );

  return response.data;
};

export const getCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`)
  console.log(response.data.cast)

  return response.data;
}

export const getReview = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`)
  console.log(response.data.cast)

  return response.data;
}
