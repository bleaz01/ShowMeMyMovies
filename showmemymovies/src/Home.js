import React from 'react';

import './App.css';
import apiMovie, { apiMoviesMap } from './conf/api.movie';
import Films from './features/films'

class Home extends React.Component {

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
      const movies = data.map(apiMoviesMap)
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

  updateMovies = (movies) => {
    this.setState({
      listeMovies: movies,
      loaded: true

    })
  }
  render() {
    return (

      <Films
        updateDetails={this.updateDetails}
        movies={this.state.listeMovies}
        updateMovies={this.updateMovies}
        loaded={this.state.loaded}
        selectedMovies={this.state.selectedMovies}
      />
    );
  }
}

export default Home;
