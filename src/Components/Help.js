import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

const Help = () => {

    return (
        <div style={{backgroundColor: "black", height: "850px"}}>

            <div className="ui container">
                <h1 style={{ paddingTop: "30px", paddingBottom: "30px", color: "#3d8bff" }}>Blox<span style={{ color: "white" }}>buster</span></h1>
                <SearchBar label={"Film Search"} />
            </div>

            <NavBar pageHeader="Help Page"></NavBar>

            <div className="ui container">
                <h1 style={{color: "white", paddingTop: "30px"}}>FAQ</h1>

                <h3 style={{color: "#3d8bff"}}>How can I rate a movie or film?</h3>
                <p style={{color: "white"}}>You can rate a movie or film by selecting the movie poster which will take you to the 
                movie's information page. There you can select the rate button which will allow you to 
                rate the movie or film out of 5 stars. After rating the movie, the site will give a prompt 
                confirming your rating selection.</p>

                <h3 style={{color: "#3d8bff"}}>How can I create a new account?</h3>
                <p style={{color: "white"}}>You can create a new account by simply clicking on the accounts page. There you can input 
                your information and create a Bloxbuster account. You should recieve a confirmation email after 
                creating the account.</p>

                <h3 style={{color: "#3d8bff"}}>How can I view more information about a film?</h3>
                <p style={{color: "white"}}>You can view more information about a film by clicking on the movie poster. Clicking the movie 
                poster will take you to a new page where you can find all relevant information about the movie.</p>
            </div>
            
        </div>
    );

}

export default Help;