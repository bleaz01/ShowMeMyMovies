import React, { Component } from 'react'
import MovieElements from './MovieElement'

export default class MovieList extends Component {


    render() {
        const movie = this.props.movies.map((movie, index) => {
            return (<MovieElements key={movie.titre} movie={movie} updateDetails={() => { this.props.updateDetails(index) }} />)
        })

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