import request from "./request";
const API_KEY = process.env.REACT_APP_API_KEY;
 let request = {
  fetchTrending: `/trending/all/work?api_key=${API_KEY} &language=en-US`,

  fetchNetflixoriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movies/top_rated?/api_key=${API_KEY}&language=en-US`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=500`,

  fetchDocmentaries: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};


export default request;







