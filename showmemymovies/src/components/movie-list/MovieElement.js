import React, { Component } from 'react'

export default class MovieElements extends Component {

    render() {
        return (
            <div className='w-25 p-2'>
                <div className='card'>
                    <img alt='image' src='http://www.marvel-cineverse.fr/medias/images/jigsaw.jpg' className='card-img-top' />
                    <div className='card-body bg-ligth'>
                        <h5 className="card-title">Saw 8</h5>
                        <p className="card-text">Jigsaw ou Décadence : L'Héritage au Québec est un film d'horreur américain réalisé par Michael et Peter Spierig, sorti en 2017. Il s'agit du 8ᵉ film de la série de films d'horreur Saw</p>
                    </div>
                </div>
            </div >

        );
    }
}