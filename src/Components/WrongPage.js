import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

const WrongPage = () => {    
    return (
        <div style={{backgroundColor: "black", height: "850px"}}>

            <SearchBar label={"Film Search"} />

            <NavBar pageHeader="404"></NavBar>

            <div className="ui container">
                <h1 style={{color: "white", paddingTop: "40px"}}>Sorry, the page you are looking for does not exist.</h1>
            </div>
        </div>
    )
}

export default WrongPage;