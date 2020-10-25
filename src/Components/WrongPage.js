import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

const WrongPage = () => {    
    return (
        <div style={{backgroundColor: "black", height: "850px"}}>

            <div className="ui container">
                <h1 style={{ paddingTop: "30px", paddingBottom: "30px", color: "#3d8bff" }}>Blox<span style={{ color: "white" }}>buster</span></h1>
                <SearchBar label={"Film Search"} />
            </div>

            <NavBar pageHeader="404"></NavBar>

            <div className="ui container">
                <h1 style={{color: "white", paddingTop: "40px"}}>Sorry, the page you are looking for does not exist.</h1>
            </div>
        </div>
    )
}

export default WrongPage;