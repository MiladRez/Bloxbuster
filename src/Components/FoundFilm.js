import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import MoviePoster from "./MoviePoster";

class FoundFilm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { language: "English", darkMode: false, foundFilms: [] };

        this.TMDB_API_KEY = "c8525074a7268bfec0dd21eafcf7dc57";
    }

    componentDidUpdate(prevProps) {
        localStorage.setItem("dark", this.state.darkMode);
    }

    componentDidMount() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = localStorage.getItem("dark") === "true" ? true : false;

        this.setState({darkMode: isReturningUser ? savedMode : false})

        fetch("https://api.themoviedb.org/3/search/movie?" + new URLSearchParams({
            api_key: this.TMDB_API_KEY,
            query: this.props.location.state
        }))
        .then(response => response.json())
        .then((responseData) => {
            this.setState({foundFilms: responseData.results})
        })
        .catch(error => console.log(error));
    }

    toggleDarkMode = (darkMode) => {
        this.setState({darkMode: darkMode})
    }

    onLanguageChange = (lang) => {
        if (lang === "English") {
            this.setState({language: "English"});
        } else {
            this.setState({language: "Spanish"});
        }
    }

    submitSearch = (film) => {
        fetch("https://api.themoviedb.org/3/search/movie?" + new URLSearchParams({
            api_key: this.TMDB_API_KEY,
            query: film
        }))
        .then(response => response.json())
        .then((responseData) => {
            this.setState({foundFilms: responseData.results})
        })
        .catch(error => console.log(error));
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

        const listFoundFilms = this.state.foundFilms.map((film) => {
            var filmKey = film.id;
            return <MoviePoster key={filmKey} featuredFilm={film} darkMode={this.state.darkMode} />
        });

        return (
            <div className={this.state.darkMode ? "bgColorDark" : "bgColorLight"}>

                <SearchBar onLanguageChange={this.onLanguageChange} toggleDarkMode={this.toggleDarkMode} submitSearch={this.submitSearch} />

                <NavBar pageHeader={navbarHeader} lang={this.state.language} darkMode={this.state.darkMode} />

                <div className="ui container" style={{marginTop: "60px"}}>
                    <h3 className={this.state.darkMode ? "fontColorDark" : "fontColorLight"}>{header1}:</h3>

                    <div className="ui three column grid">
                        {listFoundFilms}
                    </div>

                </div>

            </div>
        );
    }
}

export default FoundFilm;