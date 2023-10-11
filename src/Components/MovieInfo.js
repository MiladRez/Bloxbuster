import React from 'react';
import MoviePoster from './MoviePoster';
import NavBar from './NavBar';
import ReactStars from 'react-rating-stars-component';
import SearchBar from './SearchBar';

class MovieInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = { darkMode: false, film: "", listOfGenres: [], cast: [], directors: [] };
    }

    componentDidUpdate() {
        localStorage.setItem("dark", this.state.darkMode);
    }

    componentDidMount() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = localStorage.getItem("dark") === "true" ? true : false;

        this.setState({darkMode: isReturningUser ? savedMode : false})

		var film_id = "";

        // Fetch the film object by  searching with film name passed on from the route URL
        fetch("https://api.themoviedb.org/3/search/movie?" + new URLSearchParams({
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            query: this.props.match.params.filmName
        }))
        .then(response => response.json())
        .then((responseData) => {
            for (let i = 0; i < responseData.results.length; i++) {
                if (responseData.results[i].title === this.props.match.params.filmName) {
                    this.setState({film: responseData.results[i]})
                    film_id = responseData.results[i].id
				}
            }
            // Fetch the list of cast members and staff starring in the movie
            fetch(`https://api.themoviedb.org/3/movie/${film_id}/credits?` + new URLSearchParams({
                api_key: process.env.REACT_APP_TMDB_API_KEY
            }))
            .then(response => response.json())
            .then((responseData) => {
                this.setState({cast: responseData.cast, directors: responseData.crew});
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));

        // Fetch the list of genres with their corresponding ids
        fetch("https://api.themoviedb.org/3/genre/movie/list?" + new URLSearchParams({
            api_key: process.env.REACT_APP_TMDB_API_KEY
        }))
        .then(response => response.json())
        .then((responseData) => {
            this.setState({listOfGenres: responseData.genres});
        })
        .catch(error => console.log(error));
    }

    toggleDarkMode = (darkMode) => {
        this.setState({darkMode: darkMode})
    }

    ratingChanged = (newRating) => {
        alert("Your rating for this movie has been saved!");
    };

    onLanguageChange = (lang) => {
        console.log(lang)
    }

    render() {
        
        var genre = "";
        var film = "";
        var description = "";
        var castList = [];
        var directors = [];
        if (this.state.film && this.state.listOfGenres.length !== 0 && this.state.cast.length !== 0 && this.state.directors.length !== 0) {
            const genreList = this.state.film.genre_ids;
            const genre_id = genreList[0]
            
            // loop through the list of genres and find the genre name using the matching genre id
            for (let i in this.state.listOfGenres) {
                if (this.state.listOfGenres[i].id === genre_id) {
                    genre = this.state.listOfGenres[i].name;
                }
            }

            for (let i = 0; i < 5; i++) {
                if (this.state.cast[i] && this.state.cast[i].known_for_department === "Acting") {
                    castList.push(this.state.cast[i].name)
                }
                if (i < 4) {
                    castList.push(", ")
                } 
            }

            for (let i in this.state.directors) {
                if (this.state.directors[i].job === "Director") {
                    directors.push(this.state.directors[i].name)
                }
            }

            film = this.state.film

            if (this.state.film.overview.length > 400) {
                var diff = this.state.film.overview.length - 400
                description = this.state.film.overview.slice(0, -diff)
                description += "..."
            }

        }

        var bgColor = this.state.darkMode ? "bgColorDark" : "bgColorLight";
		var fontColor = this.state.darkMode ? "fontColorDark" : "fontColorLight";

        return (
            <div className={bgColor}>

                <SearchBar onLanguageChange={this.onLanguageChange} toggleDarkMode={this.toggleDarkMode} />

                <NavBar pageHeader="Movie Info" darkMode={this.state.darkMode} />

                <div className="ui container">
                    <div className="ui three column grid" style={{marginTop: "30px"}}>
                        <MoviePoster featuredFilm={film} darkMode={this.state.darkMode} />

                        <div className="column">
                            <div className={`ui segment ${bgColor}`}>
                                <i className={`film icon ${fontColor}`} style={{fontSize: "40px"}}></i><h1 className={fontColor} style={{display: "inline"}}>{film.title}</h1>
                                <h3 className={fontColor}>{genre}</h3>
                                <br></br>
                                <p className={fontColor}>{description}</p>

                                <br></br>
                                
                                <i className={`users icon ${fontColor}`} style={{fontSize: "20px"}}></i><h3 className={fontColor} style={{display: "inline"}}> Cast of actors</h3>
                                <p className={fontColor}>{castList}</p>
                                <br></br>
                                <i className={`bullhorn icon ${fontColor}`} style={{fontSize: "20px"}}></i><h3 className={fontColor} style={{display: "inline"}}> Director(s)</h3>
                                <p className={fontColor}>{directors}</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className={`ui segment ${bgColor}`}>
                                <div className="fluid massive ui animated fade yellow button" tabIndex="0">
                                    <div className="visible content">Rating</div>
                                    <div className="hidden content" style={{marginLeft: "29%"}}>
                                        <ReactStars count={5} onChange={this.ratingChanged} size={27} activeColor="#ffd700" />
                                    </div>
                                </div>

                                <br></br>
                                <button className="fluid massive ui red button">Favourite</button>
                                <br></br>
                                <button className="fluid massive ui green button">Watched</button>
                                <br></br>
                                <button className="fluid massive ui blue button">Watch Later</button>
                            </div>
                        </div>

                        <div style={{marginBottom: "100px"}}></div>

                    </div>
                </div>
                
            </div>
        );
    }
    
}

export default MovieInfo;