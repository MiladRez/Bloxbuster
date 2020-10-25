import React from 'react';
import MovieInfo from './MovieInfo';
import Films from './Films';
import Help from './Help';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WrongPage from './WrongPage';

class App extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: "black" }}>
                
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Films}></Route>
                        <Route path='/films' component={Films}></Route>
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