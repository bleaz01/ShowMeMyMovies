import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4/',
    headers: {
    }
})

apiMovie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTU3MWI5MDllMWI3MGQwMjhmODZjMzc4Y2U4MDNjYyIsInN1YiI6IjVlMmI0OTVkOThmMWYxMDAxNGY4ZWFmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ip5XRH7JUgC2Ap9vwoP1jJlzI2B4obpYzDyHQ1_w-Uk'
    return req
})


export default apiMovie;

export const apiMoviesMap = (f) => ({
    id: f.id,
    img: `https://image.tmdb.org/t/p/w500/${f.backdrop_path}`,
    titre: f.title,
    description: f.overview,
    details: `${f.release_date} | ${f.vote_average}/10`,

})

