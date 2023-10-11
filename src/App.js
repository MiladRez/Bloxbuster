import React from 'react';
import Films from './Components/Films';
import FoundFilm from './Components/FoundFilm';
import MovieInfo from './Components/MovieInfo';
import Help from './Components/Help';
import WrongPage from './Components/WrongPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: "black" }}>
                
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Films} />
                        <Route path='/films' component={Films} />
                        <Route path='/foundFilm/:searchTerm' component={FoundFilm} />
                        <Route path='/movieInfo/:filmName' component={MovieInfo} />
                        <Route path='/help' component={Help} />
                        <Route component={WrongPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;