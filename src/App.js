import React, { Component } from 'react';
import getRepositories from "./api/apis";
import logo from './assets/images/octocatFlavors.png';
import './assets/stylesheets/App.scss';
import SearchForm from './components/SearchForm';
import SearchResultsDisplay from './components/RepoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      queryResults: [],
      searchWord: '',
      selectedLanguage: ''
    };
  }
  handleSubmit = (e, searchWord, selectedLanguage) => {
    e.preventDefault();
    getRepositories(searchWord, selectedLanguage)
      .then((data) => {
        this.setState({ queryResults: data.items, searchWord: searchWord, selectedLanguage: selectedLanguage })}
      );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Search Your Favorite Octocat Flavor</h1>
          <SearchForm handleSubmit={this.handleSubmit} />
          <SearchResultsDisplay queryData={{ queryResults: this.state.queryResults, searchWord: this.state.searchWord, selectedLanguage: this.state.selectedLanguage }} />
        </header>
      </div>
    );
  }
}

export default App;
