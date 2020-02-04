import React from 'react';
import { MovieDetails, Search, MovieList } from './components'
import Loading from '../../components/utils/Loading'

export default (props) => {
    console.log('my props')
    console.log(props)

    return (

        <div>
            <div className="d-flex flex-row justify-content-end">
                <Search updateMovies={props.updateMovies} />
            </div>
            {props.loaded === true
                ?
                <div className='d-flex flex-row flex-fill p-2'>
                    <MovieList
                        movies={props.movies}
                        updateDetails={props.updateDetails}
                    />
                    <MovieDetails movies={props.movies[props.selectedMovies]} />
                </div>
                :
                <Loading />}

        </div>
    )
}
