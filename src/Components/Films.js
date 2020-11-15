import React from 'react';
import MoviePoster from './MoviePoster';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import "../Styles/Theme.css";

class Films extends React.Component {

    state = { language: "English", theme: "Light" };

    toggleDarkMode = (theme) => {
        if (theme === "Light") {
            this.setState({theme: "Light"});
        } else {
            this.setState({theme: "Dark"});
        }
    }

    onLanguageChange = (lang) => {
        if (lang === "English") {
            this.setState({language: "English"});
        } else {
            this.setState({language: "Spanish"});
        }
    }

    render() {
        // ENGLISH VERSION
        var navbarHeader = "Films Page";
        var header1 = "New Releases";
        var header2 = "Top Films of the Week";

        if (this.state.language === "Spanish") {
            // SPANISH VERSION
            navbarHeader = "Página de Películas";
            header1 = "Nuevos Lanzamientos";
            header2 = "Mejores Películas de la Semana";
        }

        return (
            <div className={`bgColor${this.state.theme}`} >
                <SearchBar toggleDarkMode={this.toggleDarkMode} onLanguageChange={this.onLanguageChange} />
                
                <NavBar pageHeader={navbarHeader} lang={this.state.language} theme={this.state.theme}></NavBar>

                <div className="ui container" style={{marginTop: "60px"}}>
                    <h3 className={`fontColor${this.state.theme}`}>{header1}</h3>

                    <div className="ui three column grid">
                        <MoviePoster featuredFilm="batmanBegins" theme={this.state.theme} />

                        <MoviePoster featuredFilm="darkKnight" theme={this.state.theme} />

                        <MoviePoster featuredFilm="darkKnightRises" theme={this.state.theme} />
                    </div>

                </div>

                <div className="ui container" style={{marginTop: "60px"}}>
                    <h3 className={`fontColor${this.state.theme}`}>{header2}</h3>

                    <div className="ui three column grid">
                        <MoviePoster featuredFilm="interstellar" theme={this.state.theme} />

                        <MoviePoster featuredFilm="inception" theme={this.state.theme} />

                        <MoviePoster featuredFilm="tenet" theme={this.state.theme} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Films;