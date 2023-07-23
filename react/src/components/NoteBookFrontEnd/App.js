import React, { Component } from "react";
import "./Notes.css";
import NotesContainer from "./components/NotesContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {" "}
        <div className="App-header">
          <h1>Notes Board</h1>
        </div>
        <NotesContainer />
      </div>
    );
  }
}

export default App;
