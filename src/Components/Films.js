import React from 'react';
import MoviePoster from './MoviePoster';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

class Films extends React.Component {

    state = { language: "english" };

    onLanguageChange = (lang) => {
        if (lang === "English") {
            this.setState({language: "english"});
        } else {
            this.setState({language: "spanish"});
        }
    }

    render() {
        console.log("From Films.js: " + this.state.english);

        // ENGLISH VERSION
        var langChangeEnglish = "English";
        var langChangeSpanish = "Spanish";
        var searchBarLabel = "Film Search";
        var navbarHeader = "Films Page";
        var header1 = "New Releases";
        var header2 = "Top Films of the Week";

        if (this.state.language === "spanish") {
            // SPANISH VERSION
            langChangeEnglish = "Inglés";
            langChangeSpanish = "Español";
            searchBarLabel = "Búsqueda de Películas";
            navbarHeader = "Página de Películas";
            header1 = "Nuevos Lanzamientos";
            header2 = "Mejores Películas de la Semana";
        }

        return (
            <div style={{backgroundColor: "black"}}>
                <SearchBar onLanguageChange={this.onLanguageChange} label={searchBarLabel} />
                
                <NavBar pageHeader={navbarHeader} lang={this.state.language}></NavBar>

                <div className="ui container" style={{marginTop: "60px"}}>
                    <h3 style={{color: "white"}}>{header1}</h3>

                    <div className="ui three column grid">
                        <MoviePoster featuredFilm="batmanBegins" />

                        <MoviePoster featuredFilm="darkKnight" />

                        <MoviePoster featuredFilm="darkKnightRises" />
                    </div>

                </div>

                <div className="ui container" style={{marginTop: "60px"}}>
                    <h3 style={{color: "white"}}>{header2}</h3>

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

export default Films;