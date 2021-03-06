import React, { Component } from 'react'
import Style from './movieElement.module.scss'

export default class MovieElements extends Component {

    //update est une methode qui va nous permets de faire appel à la methode de App
    update = () => {
        this.props.updateDetails(this.props.movie.titre)
    }


    render() {

        return (
            // onMouseEnter est un event natif qui nous permet de choper l'élément qui est survolé par la sourie 
            <div onClick={() => { this.update() }} className={'w-25 p-2 ' + Style.container}>
                <div className='card'>
                    <img alt='img' src={this.props.movie.img} className='card-img-top' />
                    <div className='card-body bg-ligth pb-5'>
                        <h5 className="card-title">{this.props.movie.titre}</h5>
                        <p className="card-text">{this.props.movie.details}</p>
                        <div className='d-flex flex-row justify-content-end'>
                            {this.props.isFavoris === false
                                ? <button className='btn btn-success' onClick={() => { this.props.addFavori(this.props.movie.titre) }}>add</button>
                                : <button className='btn btn-success' onClick={() => { this.props.removeFavori(this.props.movie.id) }}>remove</button>
                            }
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}