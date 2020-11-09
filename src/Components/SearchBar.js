import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    state = {film: "", lang: ""};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/foundFilm', this.state.film);
    }

    changeLangStateToEnglish = () => {
        this.setState({lang: "English"}, () => {
            this.props.onLanguageChange(this.state.lang)
        });
    }

    changeLangStateToSpanish = () => {
        this.setState({lang: "Spanish"}, () => {
            this.props.onLanguageChange(this.state.lang)
        });
    }

    render() {
        return (
            <div className="ui container">
                <h1 style={{ paddingTop: "30px", paddingBottom: "30px", color: "#3d8bff" }}>Blox<span style={{ color: "white" }}>buster</span></h1>
                <button className="ui left attached button" style={{marginLeft: "970px"}} onClick={this.changeLangStateToEnglish}>English</button>
                <button className="right attached ui button" style={{textAlign: "right"}} onClick={this.changeLangStateToSpanish}>Spanish</button>
                <div className="search-bar ui segment" style={{backgroundColor: "#3d8bff"}}>
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>{this.props.label}</label>
                            <input type="text" value={this.state.film} onChange={(e) => {this.setState({film: e.target.value})}}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default withRouter(SearchBar);