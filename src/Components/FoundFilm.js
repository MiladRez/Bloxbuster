import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import MoviePoster from "./MoviePoster";

const FoundFilm = (props) => {
    var films = ["batman begins", "dark knight", "dark knight rises", "interstellar", "inception", "tenet"];
    var selectedFilm = null;
    var film = props.location.state;

    if (films.includes(film)) {
        if (film === "batman begins") {
            selectedFilm = "batmanBegins";
        } else if (film === "dark knight") {
            selectedFilm = "darkKnight";
        } else if (film === "dark knight rises") {
            selectedFilm = "darkKnightRises";
        } else if (film === "interstellar") {
            selectedFilm = "interstellar";
        } else if (film === "inception") {
            selectedFilm = "inception";
        } else {
            selectedFilm = "tenet";
        }
    }

    const onLanguageChange = (lang) => {
        console.log(lang)
    }

    return (
        <div style={{backgroundColor: "black"}}>

            <div className="ui container">
                <h1 style={{ paddingTop: "30px", paddingBottom: "30px", color: "#3d8bff" }}>Blox<span style={{ color: "white" }}>buster</span></h1>
                <SearchBar onLanguageChange={onLanguageChange} label={"Film Search"} />
            </div>

            <NavBar pageHeader="Film Search"></NavBar>

            <div className="ui container" style={{marginTop: "60px"}}>
                <h3 style={{color: "white"}}>Found:</h3>

                <div className="ui three column grid">
                    <MoviePoster featuredFilm={selectedFilm} />
                </div>

            </div>

        </div>
    );
};

export default FoundFilm;