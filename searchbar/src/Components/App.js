import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID 02f26e562760baaad9e3aea1c9140f44855315ef5daaefe4e8d9b78b71932e89"
      }
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
