import React, { Component } from 'react'
import MovieElements from './MovieElement'

export default class MovieList extends Component {
    render() {
        return (
            <div className='w-75 pt-2'>
                <h3>Film</h3>
                <div className='d-flex flex-row flex-wrap'>
                    {this.props.movies.map}
                    <MovieElements movie={this.props.movies[0]} updateDetails={this.props.updateDetails} />
                    <MovieElements movie={this.props.movies[1]} updateDetails={this.props.updateDetails} />
                    <MovieElements movie={this.props.movies[2]} updateDetails={this.props.updateDetails} />
                    <MovieElements movie={this.props.movies[3]} updateDetails={this.props.updateDetails} />


                </div>
            </div>
        )
    }
} 