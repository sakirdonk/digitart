const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`, //page: popular
    NOW_PLAYING: `${BASE_URL}movie/now_playing?api_key=${API_KEY}`, //page: now_playing
    TOP_RATED: `${BASE_URL}movie/top_rated?api_key=${API_KEY}`, //page: top_rated
    RECOMENDATION: (id) => `${BASE_URL}movie/${id}/recommendations?api_key=${API_KEY}`, //page: details
    DETAIL_MOVIE: (id) => `${BASE_URL}movie/${id}?api_key=${API_KEY}&append_to_response=videos`, //components: detail_movie
    HERO_DETAIL_MOVIE: (id) => `${BASE_URL}movie/${id}?api_key=${API_KEY}&append_to_response=videos`, //components: hero
    HERO_TRENDING: `${BASE_URL}trending/movie/day?api_key=${API_KEY}`, //components: hero
};

export default ENDPOINTS;