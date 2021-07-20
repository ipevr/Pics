import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID QB6gURUwJh6f2PL8lbkuOzIWwAXYwvLtWu2vYmR-q7o",
      },
      params: {
        query: term,
      },
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
