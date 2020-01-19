import React from 'react'

export default class Header extends React.Component {

    render() {
        return (
            <header className='navbar navbar-expand-lg navbar-light bg-success'>
                <a className='navbar-brand text-warning' href='/'>ShowMeMyMovies</a>
                <button className='navbar-toggler'>
                    <span className='navbar-toggler-icon'></span> {/*navbar-toggler == menu hamburger (lors que l'écrant est petit)   */}
                </button>
                <div className='collapse navbar-collapse'>  {/*collapse navbar-collapse nous permets d'avoir un liste dans notre menu déroulant */}
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item-active'>
                            <a className='nav-link text-warning' href='./'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-warning' href='./'>Favorie</a>
                        </li>

                    </ul>
                </div>
            </header>
        )
    }
} 