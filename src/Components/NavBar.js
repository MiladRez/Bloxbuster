import React from 'react';

const NavBar = (props) => {

    // ENGLISH VERSION
    var a1 = "Account";
    var a2 = "Films";
    var a3 = "Lists";
    var a4 = "People";
    var a5 = "Help";

    if (props.lang === "Spanish") {
        // SPANISH VERSION
        a1 = "Cuenta";
        a2 = "Películas";
        a3 = "Liza";
        a4 = "Personas";
        a5 = "Ayuda";
    }

    return (
        <div>
            <center><h2 className={`fontColor${props.theme}`} style={{marginTop: "60px"}}>{props.pageHeader}</h2></center>

            <div className="ui container" style={{marginTop: "20px"}}>
                <div className="ui five item menu" style={{backgroundColor: "#3d8bff"}}>
                    <a className="item" href="/account">{a1}</a>
                    <a className="item" href="/">{a2}</a>
                    <a className="item" href="/lists">{a3}</a>
                    <a className="item" href="/people">{a4}</a>
                    <a className="item" href="/help">{a5}</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;