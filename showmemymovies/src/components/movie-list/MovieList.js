import React, { Component } from 'react'
import MovieElements from './MovieElement'

export default class MovieList extends Component {

    render() {
        return (
            <div className='w-75 pt-2'>
                <h3>Film</h3>
                <div className='d-flex flex-row flex-wrap'>
                    <MovieElements />
                    <MovieElements />
                    <MovieElements />
                    <MovieElements />
                    <MovieElements />
                    <MovieElements />
                    <MovieElements />
                    <MovieElements />
                </div>
            </div>
        )
    }
} 