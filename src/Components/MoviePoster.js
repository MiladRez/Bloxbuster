import React from "react";
import { Link } from 'react-router-dom';
import MovieInfo from "./MovieInfo";

const MovieData = {
    batmanBegins: {
        moviePoster: "/batman_begins.jpg",
        watched: 14,
        liked: 21,
        stars: 3.5
    },
    darkKnight: {
        moviePoster: "/dark_knight.jpg",
        watched: 150,
        liked: 100,
        stars: 5.0
    },
    darkKnightRises: {
        moviePoster: "/dark_knight_rises.jpg",
        watched: 250,
        liked: 100,
        stars: 4.5
    },
    interstellar: {
        moviePoster: "/interstellar.jpg",
        watched: 200,
        liked: 90,
        stars: 4.5
    },
    inception: {
        moviePoster: "/inception.jpg",
        watched: 300,
        liked: 200,
        stars: 5.0
    },
    tenet: {
        moviePoster: "/tenet.jpg",
        watched: 500,
        liked: 300,
        stars: 4.5
    }
}

const MoviePoster = (props) => {

    const {moviePoster, watched, liked, stars} = MovieData[props.featuredFilm];

    const rating = [];

    const new_stars = stars - (stars % 1);

    for(let i = 0; i < new_stars; i++) {
        rating.push(<i className="star icon" key={i} style={{fontSize: "20px"}}></i>);
        
    }

    if(stars % 1 === 0.5) {
        rating.push(<i className="star half icon" key={20} style={{fontSize: "20px"}}></i>);
    }

    return (
        <div className="column">
            <div className="ui segment">
                <Link to={{pathname: '/movieInfo', movieProps: {film_name: props.featuredFilm}}}><img src={moviePoster} alt="Movie Poster" width="327px" height="450px"></img></Link>

                <div style={{paddingTop: "10px", paddingLeft: "5px"}}>
                    <i className="eye icon" style={{fontSize: "20px", display: "inline"}}> {watched}</i>

                    <i className="heart icon" style={{fontSize: "20px", marginLeft: "20px", display: "inline"}}> {liked}</i>

                    <div style={{display: "inline", float: "right"}}>
                        {rating}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default MoviePoster;