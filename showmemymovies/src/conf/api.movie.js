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