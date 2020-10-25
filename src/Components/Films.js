import React from 'react';
import MoviePoster from './MoviePoster';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

class Films extends React.Component {

    state = { films: ["Batman Begins", "Dark Knight", "Dark Knight Rises", "Interstellar", "Inception", "Tenet"], selectedFilm: null, english: true };

    onFilmSearchSubmit = (film) => {

        if (this.state.films.includes(film)) {

            if (film === "Batman Begins") {
                this.setState({selectedFilm: "batmanBegins"});
            } else if (film === "Dark Knight") {
                this.setState({selectedFilm: "darkKnight"});
            } else if (film === "Dark Knight Rises") {
                this.setState({selectedFilm: "darkKnightRises"});
            } else if (film === "Interstellar") {
                this.setState({selectedFilm: "interstellar"});
            } else if (film === "Inception") {
                this.setState({selectedFilm: "inception"});
            } else {
                this.setState({selectedFilm: "tenet"});
            }
        }
    }

    changeLangEnglish = () => {
        this.setState({english: true});
    }

    changeLangSpanish = () => {
        this.setState({english: false});
    }

    render() {

        if (this.state.selectedFilm) {
            return (
                <div style={{backgroundColor: "black"}}>

                    <div className="ui container">
                        <h1 style={{ paddingTop: "30px", paddingBottom: "30px", color: "#3d8bff" }}>Blox<span style={{ color: "white" }}>buster</span></h1>
                        <SearchBar onFilmSearchSubmit={this.onFilmSearchSubmit} label={"Film Search"} />
                    </div>

                    <NavBar pageHeader="Films Page"></NavBar>

                    <div className="ui container" style={{marginTop: "60px"}}>
                        <h3 style={{color: "white"}}>Found:</h3>

                        <div className="ui three column grid">
                            <MoviePoster featuredFilm={this.state.selectedFilm} />
                        </div>

                    </div>

                </div>
            );
        } else {

            if (this.state.english) {
                // ENGLISH VERSION
                return (
                    <div style={{backgroundColor: "black"}}>

                        <div className="ui container">
                            <h1 style={{ paddingTop: "30px", paddingBottom: "30px", color: "#3d8bff" }}>Blox<span style={{ color: "white" }}>buster</span></h1>
                            <button className="ui left attached button" style={{marginLeft: "970px"}} onClick={this.changeLangEnglish}>English</button>
                            <button className="right attached ui button" style={{textAlign: "right"}} onClick={this.changeLangSpanish}>Spanish</button>
                            <SearchBar onFilmSearchSubmit={this.onFilmSearchSubmit} label={"Film Search"} />
                        </div>
                        
                        <NavBar pageHeader="Films Page"></NavBar>

                        <div className="ui container" style={{marginTop: "60px"}}>
                            <h3 style={{color: "white"}}>New Releases</h3>

                            <div className="ui three column grid">
                                <MoviePoster featuredFilm="batmanBegins" />

                                <MoviePoster featuredFilm="darkKnight" />

                                <MoviePoster featuredFilm="darkKnightRises" />
                            </div>

                        </div>

                        <div className="ui container" style={{marginTop: "60px"}}>
                            <h3 style={{color: "white"}}>Top Films of the Week</h3>

                            <div className="ui three column grid">
                                <MoviePoster featuredFilm="interstellar" />

                                <MoviePoster featuredFilm="inception" />

                                <MoviePoster featuredFilm="tenet" />
                            </div>

                        </div>
                    </div>
                );
            } else {
                // SPANISH VERSION
                return (
                    <div style={{backgroundColor: "black"}}>

                        <div className="ui container">
                            <h1 style={{ paddingTop: "30px", paddingBottom: "30px", color: "#3d8bff" }}>Blox<span style={{ color: "white" }}>buster</span></h1>
                            <button className="ui left attached button" style={{marginLeft: "970px"}} onClick={this.changeLangEnglish}>Inglés</button>
                            <button className="right attached ui button" style={{textAlign: "right"}} onClick={this.changeLangSpanish}>Español</button>
                            <SearchBar onFilmSearchSubmit={this.onFilmSearchSubmit} label={"Búsqueda de Películas"} />
                        </div>
                        
                        <NavBar pageHeader="Página de Películas" lang={"spanish"}></NavBar>

                        <div className="ui container" style={{marginTop: "60px"}}>
                            <h3 style={{color: "white"}}>Nuevos Lanzamientos</h3>

                            <div className="ui three column grid">
                                <MoviePoster featuredFilm="batmanBegins" />

                                <MoviePoster featuredFilm="darkKnight" />

                                <MoviePoster featuredFilm="darkKnightRises" />
                            </div>

                        </div>

                        <div className="ui container" style={{marginTop: "60px"}}>
                            <h3 style={{color: "white"}}>Mejores Películas de la Semana</h3>

                            <div className="ui three column grid">
                                <MoviePoster featuredFilm="interstellar" />

                                <MoviePoster featuredFilm="inception" />

                                <MoviePoster featuredFilm="tenet" />
                            </div>

                        </div>
                    </div>
                );
            }  
        }
    }
}

export default Films;