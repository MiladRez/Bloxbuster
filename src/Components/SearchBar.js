import React from 'react';
import { withRouter } from 'react-router-dom';
import "../Styles/Theme.css";
import { Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {film: "", lang: "", darkMode: false};
        
        // Current language switcher button labels (default is English)
        // ENGLISH VERSION
        this.langChangeEnglish = "English";
        this.langChangeSpanish = "Spanish";
        this.searchBarLabel = "Film Search";
    }

    componentDidUpdate() {
        localStorage.setItem("dark", this.state.darkMode);
    }

    componentDidMount() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = localStorage.getItem("dark") === "true" ? true : false;

        if (isReturningUser) {
            this.setState({darkMode: savedMode})
        } else {
            this.setState({darkMode: false})
        }
    }

    toggleDarkMode = () => {
        this.setState({darkMode: !this.state.darkMode}, () => {
            this.props.toggleDarkMode(this.state.darkMode)
        })
    }

    onFormSubmit = (event) => {
		event.preventDefault();
		this.props.history.push(`/foundFilm/${this.state.film}`, this.state.film);
    }

    changeLangStateToEnglish = () => {
        this.setState({lang: "English"}, () => {
            this.props.onLanguageChange(this.state.lang)
        });
        
        // Change language switcher button labels to appropriate language
        // ENGLISH VERSION
        this.langChangeEnglish = "English";
        this.langChangeSpanish = "Spanish";
        this.searchBarLabel = "Film Search";
    }

    changeLangStateToSpanish = () => {
        this.setState({lang: "Spanish"}, () => {
            this.props.onLanguageChange(this.state.lang)
        });

        // Change language switcher button labels to appropriate language
        // SPANISH VERSION
        this.langChangeEnglish = "Inglés";
        this.langChangeSpanish = "Español";
        this.searchBarLabel = "Búsqueda de Películas";
    }

    render() {
        var fontColor = this.state.darkMode ? "fontColorDark" : "fontColorLight";
        return (
			<div className="ui container">
				<Link to={{
                    pathname: "/"}}>
                    <h1 style={{ marginTop: "30px", marginBottom: "0px", color: "#3d8bff", display: "inline-block" }}>Blox<span className={fontColor}>buster</span></h1>
                </Link>

                <label className={fontColor} style={{float: "right", paddingLeft: "10px", marginTop: "30px"}}>Dark Mode</label>
                <Checkbox 
                    toggle
                    checked={this.state.darkMode}
                    onClick={this.toggleDarkMode}
                    style={{float: "right", marginTop: "30px"}}
                />

                <br></br>
                <br></br>

                <button className="right attached ui button" style={{float: "right", textAlign: "right"}} onClick={this.changeLangStateToSpanish}>{this.langChangeSpanish}</button>
                <button className="ui left attached button" style={{float: "right"}} onClick={this.changeLangStateToEnglish}>{this.langChangeEnglish}</button>
                <br></br>
                <br></br>
                <div className="search-bar ui segment" style={{backgroundColor: "#3d8bff"}}>
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label className={fontColor}>{this.searchBarLabel}</label>
                            <input type="text" value={this.state.film} onChange={(e) => {this.setState({film: e.target.value})}}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default withRouter(SearchBar);