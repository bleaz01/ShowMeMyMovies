import React from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            time: '',
            isConnected: props.isConnected
        }
        setInterval(() => {
            this.setState({
                time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
            })
        }, 1000);
    }



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
                            <NavLink to='/' className='nav-link text-warning'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            {this.state.isConnected === false
                                ? <NavLink to='/login' className='nav-link text-warning'>Devenir Membre </NavLink>
                                : <NavLink to='/favoris' className='nav-link text-warning'>Favoris</NavLink>
                            }

                        </li>

                        <li className='nav-item'>
                            <a className='nav-link text-warning' href='./'>{this.state.time}</a>
                        </li>


                    </ul>
                </div>
            </header>
        )
    }
} 