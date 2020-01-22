import React from 'react'

export default class MovieDetails extends React.Component {


    render() {
        return (

            <div className='w-25 border pt-4 d-flex flex-column'>
                <h5>{this.props.movies.titre}</h5>
                <hr className='w-100' />
                <img className='d-block mx-auto' alt={this.props.movies.titre} src={this.props.movies.img} />
                <hr className='w-100' />
                <p className='text-center m-2 bg-secondary'>{this.props.movies.description}</p>
                <span>{this.props.movies.genre}</span>
            </div>


        )
    }
}