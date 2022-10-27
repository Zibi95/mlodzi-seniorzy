import React, { Component } from "react";
import CardList from "../components/card-list";
import { seniors } from "../seniors";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <CardList seniors={seniors} />;
  }
}

export default App;
