import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='ab363292d148f7bed14295fc218815f0'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=ab363292d148f7bed14295fc218815f0';

//https://api.themoviedb.org/3/trending/all/day?api_key="ab363292d148f7bed14295fc218815f0"
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}