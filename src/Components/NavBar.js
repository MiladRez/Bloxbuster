import React from 'react';

const NavBar = (props) => {

    if (props.lang === "spanish") {
        return (
            <div>
                <center><h2 style={{marginTop: "60px", color: "white"}}>{props.pageHeader}</h2></center>
    
                <div className="ui container" style={{marginTop: "20px"}}>
                    <div className="ui five item menu" style={{backgroundColor: "#3d8bff"}}>
                        <a className="item" href="/account">Cuenta</a>
                        <a className="item" href="/">Películas</a>
                        <a className="item" href="/lists">Liza</a>
                        <a className="item" href="/people">Personas</a>
                        <a className="item" href="/help">Ayuda</a>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <center><h2 style={{marginTop: "60px", color: "white"}}>{props.pageHeader}</h2></center>

                <div className="ui container" style={{marginTop: "20px"}}>
                    <div className="ui five item menu" style={{backgroundColor: "#3d8bff"}}>
                        <a className="item" href="/account">Account</a>
                        <a className="item" href="/">Films</a>
                        <a className="item" href="/lists">Lists</a>
                        <a className="item" href="/people">People</a>
                        <a className="item" href="/help">Help</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;