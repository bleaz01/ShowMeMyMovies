import React from 'react';
import { MovieDetails, Search, MovieList } from './components'
import Loading from '../../components/utils/Loading'

export default (props) => {


    return (

        <div >
            <div className="d-flex flex-row justify-content-end m-2">
                <Search updateMovies={props.updateMovies} />
            </div>
            {props.loaded === true
                ?
                <div className='d-flex flex-row flex-fill p-2'>
                    <MovieList
                        movies={props.movies}
                        updateDetails={props.updateDetails}
                        addFavori={props.addFavori}
                        removeFavori={props.removeFavori}
                        favoris={props.favoris.map(f => f.titre)}
                    />
                    <MovieDetails movies={props.movies[props.selectedMovies]} />
                </div>
                :
                <Loading />
            }

        </div>
    )
}
