import React from 'react';

import './App.css';
import { Header, MovieDetails, MovieList, Loading } from './components';
import dataMovies from './components/data';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      listeMovies: null,
      selectedMovies: 0,
      loaded: false

    }
    setInterval(() => {

      this.setState({
        listeMovies: dataMovies,
        loaded: true

      })
    }, 2000);



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

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        {this.state.loaded == true
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
