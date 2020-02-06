import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import apiMovie, { apiMoviesMap } from './conf/api.movie';
import Films from './features/films'
import Favoris from './features/favories'
import { Header, Forms } from './components'
import dBase from './conf/data.movie';
// import _ from 'lodash'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listeMovies: null,
            selectedMovies: 0,
            loaded: false,
            favoris: [],
            isConnected: true

        }


    }
    componentDidMount() {
        apiMovie.get('/discover/movie/').then(response => response.data.results).then(data => {
            const movies = data.map(apiMoviesMap)
            this.updateMovies(movies)
            // this.setState({ listeMovies: [...this.state.listeMovies, { id: data.id, titre: data.title, img: data.poster_path }] })
        }).catch(erro => console.log(erro))

        dBase.get('favoris.json').then(response => response.data).then(data => {
            let favoris = data ? data : []
            this.updateFavoris(favoris)

        }).catch(err => console.log(err))
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
            loaded: this.state.favoris ? true : false

        })
    }
    updateFavoris = (movie) => {
        this.setState({
            favoris: movie,
            loaded: this.state.listeMovies ? true : false
        })
    }
    addFavori = (titre) => {
        const favoris = this.state.favoris.slice(); //slice et un methode en JavaScrip pour copier un array 
        const film = this.state.listeMovies.find(m => m.titre === titre);
        favoris.push(film);
        this.setState({
            favoris
        }, () => {
            this.saveFavoris()
        })
    };


    removeFavori = (id) => {
        const favoris = this.state.favoris.slice();
        const index = this.state.favoris.findIndex(m => m.id === id);  //_.remove  methode de lodash 
        favoris.splice(index, 1);
        this.setState({
            favoris
        }, () => {
            this.saveFavoris()
        })
    };

    saveFavoris = () => {
        dBase.put('favoris.json', this.state.favoris);
    }

    render() {
        return (
            <Router>
                <div className="App d-flex flex-column">
                    <Header isConnected={this.state.isConnected} />
                    <div >
                        <Switch>
                            <Route path="/" exact render={(props) =>
                                <Films
                                    {...props}
                                    updateDetails={this.updateDetails}
                                    movies={this.state.listeMovies}
                                    updateMovies={this.updateMovies}
                                    loaded={this.state.loaded}
                                    selectedMovies={this.state.selectedMovies}
                                    isConnected={this.state.isConnected}
                                    addFavori={this.addFavori}
                                    removeFavori={this.removeFavori}
                                    favoris={this.state.favoris}
                                />
                            } />
                            <Route exact path="/favoris" render={(props) => <Favoris
                                {...props}
                                // props sont les props relatif route 
                                film={this.state.favoris}
                                remove={this.removeFavori}
                            />}
                            />

                            <Route path="/login" render={() => <Forms isConnected={this.state.isConnected} />}></Route>
                            <Redirect to="/"></Redirect>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App