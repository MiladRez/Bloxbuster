import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import MoviePoster from "./MoviePoster";

class FoundFilm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { language: "English" };

        this.films = ["batman begins", "dark knight", "dark knight rises", "interstellar", "inception", "tenet"];
        this.selectedFilm = null;
        this.film = props.location.state;
    
        if (this.films.includes(this.film)) {
            if (this.film === "batman begins") {
                this.selectedFilm = "batmanBegins";
            } else if (this.film === "dark knight") {
                this.selectedFilm = "darkKnight";
            } else if (this.film === "dark knight rises") {
                this.selectedFilm = "darkKnightRises";
            } else if (this.film === "interstellar") {
                this.selectedFilm = "interstellar";
            } else if (this.film === "inception") {
                this.selectedFilm = "inception";
            } else {
                this.selectedFilm = "tenet";
            }
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
        var navbarHeader = "Films Search";
        var header1 = "Found";

        if (this.state.language === "Spanish") {
            // SPANISH VERSION
            navbarHeader = "Búsqueda de Películas";
            header1 = "Encontró";
        }

        return (
            <div style={{backgroundColor: "black"}}>

                <SearchBar onLanguageChange={this.onLanguageChange} />

                <NavBar pageHeader={navbarHeader} lang={this.state.language}></NavBar>

                <div className="ui container" style={{marginTop: "60px"}}>
                    <h3 style={{color: "white"}}>{header1}:</h3>

                    <div className="ui three column grid">
                        <MoviePoster featuredFilm={this.selectedFilm} />
                    </div>

                </div>

            </div>
        );
    }
}

export default FoundFilm;