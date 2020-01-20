import React from 'react';

import './App.css';
import { Header, MovieDetails, MovieList } from './components';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      listeMovies: [
        {
          titre: 'La Grande Muraille',
          genre: 'Action, SF et fantastique',
          time: '103 min',
          img: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABU6gEUidqq9heUh8Ir6ZXrbcaWyyUlsOZX2oVUewUxuBQvRrf_uEBhFnoHG0ekBBfOJm5cdaeEYnCmTiw9c6BopM_Jc.jpg?r=fc6',
          description: 'En quête de poudre noire dans la Chine de la dynastie Song, des mercenaires européens découvrent une guerre épique entre les héros du pays et des monstres sanguinaires.',
        },
        {
          titre: 'Du sport au meurtre : Dans la tête d\'Aaron Hernandez',
          genre: 'Docu-séries, Policier, US',
          time: '49 min',
          img: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSuFlErC6wRDaao4ldPEKaB7iXBXE7--S9bDfZ3HEA6t8Jufh6BKSLyOGuOVRF0gVgHVKzmJndOtWswz1QpeBRaIkt4rzjHU0i5Ql7lxzAMwxmit8nN9Hj37hfSD.jpg?r=1fd',
          description: 'Au fil d\'entretiens avec ses amis, d\'autres joueurs et des initiés, ce docu-série s\'intéresse à Aaron Hernandez, une star du football américain devenue un meurtrier.',
        },
        {
          titre: 'Sex Education',
          genre: 'Ados, Comédie, Drame',
          time: '49 min',
          img: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABet1olHttZi0QtTZ1V4PHNYsnhjRuyZea7aRK13Zl-QflNpgH90_KbFV3_N3E-MPWY9DWV_M6HCmI4cw2zNPuDz1gzlfK43eoJ_uMMaCe6FELNzllKmJveXkAMONFF1Z4yPAln9h91cWy7JU_uj3Ma3v_h5NbQ.jpg?r=d28',
          description: 'Le timide Otis connaît pourtant tout sur le sexe... grâce à sa maman thérapeute. La rebelle Maeve le décide donc à ouvrir un cabinet de conseil clandestin au lycée',
        },
        {
          titre: 'Dragon Ball Z - Fusions',
          genre: 'Action, Anime, International',
          time: '49 min',
          img: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABa2ab-ZrRKAjk4ux6yZYyED1cIRHzwD9LPqdBht0cHjpImkYpkFwPoeD-eX5EHPkVi_lBVrJEgZ5oSRXyQOt0JMFcBM.jpg?r=285',
          description: "Quand un jeune ogre ouvre accidentellement la porte vers l'autre monde, la Terre est tout à coup envahie d'esprits du mal, et l'adolescent est transformé en monstre."
        },
      ],
      selectedMovies: 0,




    }

  }
  //updateDetais est une methode de notre class App qui va nous permets de modifier l 'élément de Moviedetails
  updateDetails = (titre) => {
    //.fintIndex() est une methode nativ a javascrip pour trouvé une items dans un Array
    const index = this.state.listeMovies.findIndex((rf) => {
      return titre === rf.titre
    })

    // this.setState nous permet de modifier l'étas du state
    this.setState({
      selectedMovies: index
    })
  };

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className='d-flex flex-row flex-fill p-2'>
          <MovieList movies={this.state.listeMovies} updateDetails={this.updateDetails} />
          <MovieDetails movies={this.state.listeMovies[this.state.selectedMovies]} />
        </div>
      </div>

    );
  }
}

export default App;
