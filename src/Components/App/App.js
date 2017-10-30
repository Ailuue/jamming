import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify';

let playlistName = 'playlistName';
let playlistTracks = [
  { id: 1, name: 'a', artist: 'b', album: 'c' },
  { id: 2, name: 'd', artist: 'e', album: 'f' },
  { id: 3, name: 'g', artist: 'h', album: 'i' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [],
      playlistName: playlistName,
      playlistTracks: playlistTracks
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let found = false;
    this.state.playlistTracks.forEach(checkTrack => {
      if (track.id === checkTrack.id) {
        found = true;
      }
    });
    if (!found) {
      const newList = this.state.playlistTracks.push(track);
      this.setState({ playlistTracks: newList });
    }
  }

  removeTrack(track) {
    const newList = this.state.playlistTracks.filter(
      checkTrack => track.id !== checkTrack.id
    );
    this.setState({ playlistTracks: newList });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({ playlistName: 'New Playlist', searchResults: [] });
  }

  search(term) {
    Spotify.search(term).then(response =>
      this.setState({ searchResults: response })
    );
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.SearchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
