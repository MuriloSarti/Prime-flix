import axios from 'axios';

// base da URL: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=07d80ac17d896060bb667412d2b53b61&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;