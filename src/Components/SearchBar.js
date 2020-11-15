import React from 'react';
import { withRouter } from 'react-router-dom';
import "../Styles/Theme.css";
import { Checkbox } from 'semantic-ui-react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {film: "", lang: "", theme: "Light"};
        
        // Current language switcher button labels (default is English)
        // ENGLISH VERSION
        this.langChangeEnglish = "English";
        this.langChangeSpanish = "Spanish";
        this.searchBarLabel = "Film Search";
    }

    toggleDarkMode = () => {
        if (this.state.theme === "Light") {
            this.setState({theme: "Dark"}, () => {
                this.props.toggleDarkMode(this.state.theme)
            })
        } else {
            this.setState({theme: "Light"}, () => {
                this.props.toggleDarkMode(this.state.theme)
            })
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/foundFilm', this.state.film);
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
        return (
            <div className="ui container">
                <h1 style={{ paddingTop: "30px", marginBottom: "0px", color: "#3d8bff" }}>Blox<span className={`fontColor${this.state.theme}`}>buster</span></h1>

                <label className={`fontColor${this.state.theme}`} style={{float: "right", paddingLeft: "10px"}}>Dark Mode</label>
                <Checkbox 
                    toggle
                    onClick={this.toggleDarkMode}
                    style={{float: "right"}}
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
                            <label>{this.searchBarLabel}</label>
                            <input type="text" value={this.state.film} onChange={(e) => {this.setState({film: e.target.value})}}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default withRouter(SearchBar);