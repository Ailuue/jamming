import React, { Component } from 'react';
import './SearchBar.css';

//Allows user to search for a new song/artist
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
    console.log(this.state.term);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
