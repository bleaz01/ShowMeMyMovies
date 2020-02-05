import React from 'react'
import Style from '../../features/films/components/movieElement/movieElement.module.scss'
export default class Favoris extends React.Component {

    render() {

        console.log(this.props.film)
        const film = this.props.film.map((film, index) => {
            return (
                <div className={'w-25 p-2 ' + Style.container}>
                    <div className='card'>
                        <img alt='img' src={film.img} className='card-img-top' />
                        <div className='card-body bg-ligth pb-5'>
                            <h5 className="card-title">{film.titre}</h5>
                            <p className="card-text">{film.details}</p>

                        </div>
                    </div>
                </div >
            )
        })

        return (
            <div className='w-100 pt-2'>
                <h3 className='text-center'>Mes Favoris</h3>
                <div className='d-flex flex-row flex-wrap'>
                    {film}
                </div>
            </div>
        )
    }
}