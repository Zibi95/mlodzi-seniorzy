import React from 'react';
// components
import CardList from '../components/card-list';
import Navbar from '../components/nav-bar';
import SearchBox from '../components/search-box';
import Scroll from '../components/scroll';
// redux
import { connect } from 'react-redux';
import { setSearchField } from '../action';
// seniors object
import { seniors } from '../seniors';
// styling
import './App.css';

// REDUX Functions
const mapStateToProps = state => {
  return {
    searchField: state.searchField,
  };
};
const mapDispatchToProps = dispatch => {
  return { onSearchChange: event => dispatch(setSearchField(event.target.value)) };
};

const App = ({ searchField, onSearchChange }) => {
  const filteredSeniors = seniors.filter(senior => {
    return (
      senior.nickname?.toLowerCase().includes(searchField?.toLowerCase()) ||
      senior.language?.toLowerCase().includes(searchField?.toLowerCase()) ||
      senior.position?.toLowerCase().includes(searchField?.toLowerCase())
    );
  });

  return (
    <div>
      <Navbar />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList seniors={filteredSeniors} />
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
