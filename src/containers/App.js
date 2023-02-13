import React, { Component } from 'react';
import CardList from '../components/card-list';
import Navbar from '../components/nav-bar';
import SearchBox from '../components/search-box';
import Scroll from '../components/scroll';
import { seniors } from '../seniors';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      seniors: seniors,
      searchValue: '',
    };
  }

  onSearchChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const filteredSeniors = this.state.seniors.filter(senior => {
      return (
        senior.nickname?.toLowerCase().includes(this.state.searchValue?.toLowerCase()) ||
        senior.language?.toLowerCase().includes(this.state.searchValue?.toLowerCase()) ||
        senior.position?.toLowerCase().includes(this.state.searchValue?.toLowerCase())
      );
    });
    return (
      <div>
        <Navbar />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList seniors={filteredSeniors} />
        </Scroll>
      </div>
    );
  }
}

export default App;
