import React, { Component } from 'react'
import MovieElements from '../movieElement/MovieElement'
import PropType from 'prop-types';

export default class MovieList extends Component {


    render() {
        const movie = this.props.movies.map((movie, index) => {
            return (<MovieElements key={movie.id} movie={movie} updateDetails={() => { this.props.updateDetails(index) }} />)
        })
        //propType permet de nous assurer que le valeur qui sont données au props sois les bonne lors de la compilation 
        MovieList.propType = {
            key: PropType.String,
            movie: PropType.array,
            updateDetails: PropType.any.isRequired
        }

        return (
            <div className='w-75 pt-2'>
                <h3>Film</h3>
                <div className='d-flex flex-row flex-wrap'>
                    {movie}
                </div>
            </div>
        )
    }
} 