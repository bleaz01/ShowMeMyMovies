import React from 'react';

import './App.css';
import { Header, MovieDetails, MovieList, Loading, Forms } from './components';
import dataMovies from './components/data';
import apiMovies from './conf/api.movie';
import data from './components/data';
import apiMovie from './conf/api.movie';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listeMovies: null,
      selectedMovies: 0,
      loaded: false

    }


  }
  componentDidMount() {
    apiMovie.get('/discover/movie/').then(response => response.data.results).then(data => {
      const movies = data.map(f => ({
        id: f.id,
        img: `https://image.tmdb.org/t/p/w500/${f.backdrop_path}`,
        titre: f.title,
        description: f.overview,
        details: `${f.release_date} | ${f.vote_average}/10`,

      }))
      this.updateMovies(movies)
      // this.setState({ listeMovies: [...this.state.listeMovies, { id: data.id, titre: data.title, img: data.poster_path }] })
    }).catch(erro => console.log(erro))
  }

  //updateDetais est une methode de notre class App qui va nous permets de modifier l 'élément de Moviedetails
  updateDetails = (index) => {
    //.fintIndex() est une methode nativ a javascrip pour trouvé une items dans un Array
    // const index = this.state.listeMovies.findIndex((rf) => {
    //   return titre === rf.titre
    // })

    // this.setState nous permet de modifier l'étas du state
    this.setState({
      selectedMovies: index
    })
  };

  updateMovies(movies) {
    this.setState({
      listeMovies: movies,
      loaded: true

    })
  }
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />

        {this.state.loaded === true
          ?
          <div className='d-flex flex-row flex-fill p-2'>
            <MovieList movies={this.state.listeMovies} updateDetails={this.updateDetails} />
            <MovieDetails movies={this.state.listeMovies[this.state.selectedMovies]} />
          </div>
          :
          <Loading />}

      </div>

    );
  }
}

export default App;
