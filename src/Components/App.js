import React from 'react';
import Films from './Films';
import FoundfFilm from './FoundFilm';
import MovieInfo from './MovieInfo';
import Help from './Help';
import WrongPage from './WrongPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: "black" }}>
                
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Films} />
                        <Route path='/films' component={Films} />
                        <Route path='/foundFilm' component={FoundfFilm} />
                        <Route path='/movieInfo' component={MovieInfo} />
                        <Route path='/help' component={Help} />
                        <Route component={WrongPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;