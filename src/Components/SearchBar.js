import React from 'react';

class SearchBar extends React.Component {
    state = {film: ""};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFilmSearchSubmit(this.state.film);
    }

    render() {
        return (
            <div className="search-bar ui segment" style={{backgroundColor: "#3d8bff"}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>{this.props.label}</label>
                        <input type="text" value={this.state.film} onChange={(e) => {this.setState({film: e.target.value})}}/>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;