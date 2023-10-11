import React from 'react';
import MoviePoster from './MoviePoster';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

class Films extends React.Component {

    state = { language: "English", darkMode: false, newReleases: [], popular: [] };

    componentDidUpdate() {
        localStorage.setItem("dark", this.state.darkMode);
    }

    componentDidMount() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = localStorage.getItem("dark") === "true" ? true : false;

        this.setState({darkMode: isReturningUser ? savedMode : false})

		// make list for new film releases to display using fetch
        fetch("https://api.themoviedb.org/3/movie/now_playing?" + new URLSearchParams({
            api_key: process.env.REACT_APP_TMDB_API_KEY
        }))
        .then(response => response.json())
        .then((responseData) => {
			this.setState({ newReleases: responseData.results.slice(0, 3) })
        }).catch(error => console.log(error));
		
		fetch("https://api.themoviedb.org/3/movie/top_rated?" + new URLSearchParams({
			api_key: process.env.REACT_APP_TMDB_API_KEY
		}))
			.then(response => response.json())
			.then((responseData) => {
			this.setState({ popular: responseData.results.slice(0,3) })
		})
    }

    toggleDarkMode = (darkMode) => {
        this.setState({darkMode: darkMode})
    }

    onLanguageChange = (lang) => {
        this.setState({language: lang})
    }

    render() {
        // ENGLISH VERSION
        var navbarHeader = "Films Page";
        var header1 = "New Releases";
        var header2 = "Popular";

        if (this.state.language === "Spanish") {
            // SPANISH VERSION
            navbarHeader = "Página de Películas";
            header1 = "Nuevos Lanzamientos";
            header2 = "Popular";
        }

        var fontColor = this.state.darkMode ? "fontColorDark" : "fontColorLight";

        return (
            <div className={this.state.darkMode ? "bgColorDark" : "bgColorLight"} >
                <SearchBar toggleDarkMode={this.toggleDarkMode} onLanguageChange={this.onLanguageChange} />
                
                <NavBar pageHeader={navbarHeader} lang={this.state.language} darkMode={this.state.darkMode} />

                <div className="ui container" style={{marginTop: "60px"}}>
                    <h3 className={fontColor}>{header1}</h3>

					<div className="ui three column grid">
						{this.state.newReleases.map((movie, index) => {
							return <MoviePoster key={index} featuredFilm={movie} darkMode={this.state.darkMode} />
						})}
                    </div>

                </div>

                <div className="ui container" style={{marginTop: "60px"}}>
                    <h3 className={fontColor}>{header2}</h3>

					<div className="ui three column grid">
						{this.state.popular.map((movie, index) => {
							return <MoviePoster key={index} featuredFilm={movie} darkMode={this.state.darkMode} />
						})}
                    </div>

                </div>
            </div>
        );
    }
}

export default Films;