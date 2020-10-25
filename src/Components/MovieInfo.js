import React from 'react';
import MoviePoster from './MoviePoster';
import NavBar from './NavBar';
import ReactStars from 'react-rating-stars-component';
import SearchBar from './SearchBar';

const MovieInfo = (props) => {

    var movieName = "";

    if (props.location.movieProps === undefined) {
        movieName = "darkKnight";
    } else {
        movieName = props.location.movieProps.film_name;
    }

    var film_name = "";
    var genre = "";
    var film_desc = "";
    
    var actors_cast = "";
    var directors = "";

    if (movieName === "batmanBegins") {
        film_name = "Batman Begins";
        genre = "Action/Superhero";
        film_desc = `A young Bruce Wayne (Christian Bale) travels to the Far East, 
                    where he's trained in the martial arts by Henri Ducard (Liam Neeson), 
                    a member of the mysterious League of Shadows. When Ducard reveals the League's true purpose 
                    -- the complete destruction of Gotham City -- Wayne returns to Gotham intent on cleaning up 
                    the city without resorting to murder. With the help of Alfred (Michael Caine), his loyal butler, 
                    and Lucius Fox (Morgan Freeman), a tech expert at Wayne Enterprises, Batman is born.`;
        
        actors_cast = "Christian Bale, Morgan Freeman, Liam Neeson, Michael Caine";
        directors="Christopher Nolan";
    } else if (movieName === "darkKnight") {
        film_name = "Dark Knight";
        genre = "Action/Superhero";
        film_desc = `With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), 
                    Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young 
                    criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader 
                    begins to tread a fine line between heroism and vigilantism.`;
        
        actors_cast = "Christian Bale, Aaron Eckhart, Gary Oldman, Michael Caine";
        directors="Christopher Nolan";
    } else if (movieName === "darkKnightRises") {
        film_name = "Dark Knight Rises";
        genre = "Action/Superhero";
        film_desc = `It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), 
                    vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything 
                    for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar (Anne Hathaway) 
                    and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.`;
        
        actors_cast = "Christian Bale, Gary Oldman, Anne Hathaway, Tom Hardy";
        directors="Christopher Nolan";
    } else if (movieName === "interstellar") {
        film_name = "Interstellar";
        genre = "Sci-Fi/Space";
        film_desc = `In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), 
                    a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, 
                    Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out 
                    which of three planets could be mankind's new home.`;
        
        actors_cast = "Matthew McConaughey, Anne Hathaway, Casey Affleck, Michael Caine";
        directors="Christopher Nolan";
    } else if (movieName === "inception") {
        film_name = "Inception";
        genre = "Sci-Fi/Thriller";
        film_desc = `Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. 
                    His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at 
                    redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but 
                    a dangerous enemy anticipates Cobb's every move.`;
        
        actors_cast = "Leonardo Dicaprio, Ellen Page, Joseph Gordon-Levitt, Cillian Murphy";
        directors="Christopher Nolan";
    } else {
        film_name = "Tenet";
        genre = "Sci-Fi/Thriller";
        film_desc = `An action epic film evolving from the world of international espionage.`;
        
        actors_cast = "John David Washington, Robert Pattinson, Elizabeth Debicki, Michael Caine";
        directors="Christopher Nolan";
    }

    const ratingChanged = (newRating) => {
        alert("Your rating for this movie has been saved!");
    };

    return (
        <div style={{backgroundColor: "black"}}>

            <div className="ui container">
                <h1 style={{ paddingTop: "30px", paddingBottom: "30px", color: "#3d8bff" }}>Blox<span style={{ color: "white" }}>buster</span></h1>
                <SearchBar label={"Film Search"} />
            </div>

            <NavBar pageHeader="Movie Info"></NavBar>

            <div className="ui container">
                <div className="ui three column grid" style={{marginTop: "30px"}}>
                    <MoviePoster featuredFilm={movieName}></MoviePoster>

                    <div className="column">
                        <div className="ui segment">
                            <i class="film icon" style={{fontSize: "40px"}}></i><h1 style={{display: "inline"}}>{film_name}</h1>
                            <h3>{genre}</h3>
                            <br></br>
                            <p>{film_desc}</p>

                            <br></br>
                            
                            <i class="users icon" style={{fontSize: "20px"}}></i><h3 style={{display: "inline"}}> Cast of actors</h3>
                            <p>{actors_cast}</p>
                            <br></br>
                            <i class="bullhorn icon" style={{fontSize: "20px"}}></i><h3 style={{display: "inline"}}> Director(s)</h3>
                            <p>{directors}</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="ui segment">
                            <div class="fluid massive ui animated fade yellow button" tabindex="0">
                                <div class="visible content">Rating</div>
                                <div class="hidden content" style={{marginLeft: "29%"}}>
                                    <ReactStars count={5} onChange={ratingChanged} size={27} activeColor="#ffd700"></ReactStars>
                                </div>
                            </div>

                            <br></br>
                            <button class="fluid massive ui red button">Favourite</button>
                            <br></br>
                            <button class="fluid massive ui green button">Watched</button>
                            <br></br>
                            <button class="fluid massive ui blue button">Watch Later</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default MovieInfo;