import React, { Component } from "react";
import CardList from "../components/card-list";
import Navbar from "../components/nav-bar";
import { seniors } from "../seniors";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <CardList seniors={seniors} />
      </div>
    );
  }
}

export default App;
