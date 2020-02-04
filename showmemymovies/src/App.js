import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import { Header, Search, Forms } from './components'


class App extends React.Component {
    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
                <div className='d-flex flex-row justify-content-end mt-2 mr-2'>
                    <Router>
                        <Switch>
                            <Route path="/" exact render={() => <Home />}></Route>
                            <Route path="/login" render={() => <Forms />}></Route>
                            <Redirect to="/"></Redirect>
                        </Switch>
                    </Router>
                </div>
            </div>

        )
    }
}

export default App