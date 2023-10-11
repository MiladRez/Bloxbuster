import React from "react";
import { Link } from 'react-router-dom';
import imageNotFound from "../Images/image_not_found.png";

const MoviePoster = (props) => {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
	}

    const moviePoster = props.featuredFilm.poster_path ? "https://image.tmdb.org/t/p/w500/" + props.featuredFilm.poster_path : imageNotFound
    const watched = randomInteger(0, 1000);
    const liked = props.featuredFilm.vote_count;
    const stars = Math.round(props.featuredFilm.vote_average) / 2;
    
    const rating = [];
    const new_stars = stars - (stars % 1);

    for(let i = 0; i < new_stars; i++) {
        rating.push(<i className="star icon" key={i} style={{fontSize: "20px"}}></i>);
    }

    if(stars % 1 === 0.5) {
        rating.push(<i className="star half icon" key={20} style={{fontSize: "20px"}}></i>);
    }

    var fontColor = props.darkMode ? "fontColorDark" : "fontColorLight";

    return (
        <div className="column">
            <div className="ui segment" style={{backgroundColor: "#3d8bff"}}>
                <Link to={{
                    pathname: `/movieInfo/${props.featuredFilm.title}`}}>
                    <img src={moviePoster} alt="Movie Poster" width="327px" height="450px"></img>
                </Link>

                <div style={{paddingTop: "10px", paddingLeft: "5px"}}>
                    <i className={`eye icon ${fontColor}`} style={{fontSize: "20px", display: "inline"}}><span style={{fontFamily: "Lato"}}> {watched}</span></i>

                    <i className={`heart icon ${fontColor}`} style={{fontSize: "20px", marginLeft: "20px", display: "inline"}}><span style={{fontFamily: "Lato"}}> {liked}</span></i>

                    <div style={{display: "inline", float: "right", marginRight: "10px"}}>
                        <span style={{color: "#ffd24a"}}> {rating}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default MoviePoster;