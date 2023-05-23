import axios from 'axios';

const KEY = '339fdf0f312ec016e88b23cac1f5716a'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    return response.data;
};

const fetchMoviesDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId.moviesId}?api_key=${KEY}&language=en-US`);
    return response.data
}

const fetchSearchMovie = async (searchQuery) => {
    const response = await axios.get(`/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
    return response.data
}

const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
    return response.data
}

const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`)
    return response.data
}

 const API = {
    fetchTrendingMovies,
    fetchMoviesDetails,
    fetchSearchMovie,
    fetchMovieCast,
    fetchMovieReviews,
 };

export default API;