import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(term) {
    this.props.onSearch(term);
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
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;