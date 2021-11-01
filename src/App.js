import React, { Component } from 'react';
import getRepositories from "./api/apis";
import logo from './assets/images/octocatFlavors.png';
import './assets/stylesheets/App.scss';
import SearchForm from './components/SearchForm';
import RepoList from './components/RepoList';

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
  clearSearch = () => {
    this.setState({
      queryResults: [],
      searchWord: '',
      selectedLanguage: '',
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Search Your Favorite Octocat Flavor</h1>
          {this.state.queryResults.length < 1 && (
            <SearchForm handleSubmit={this.handleSubmit} />
          )}
          {this.state.queryResults.length > 0 && (
            <RepoList
              clearSearch={this.clearSearch}
              queryData={{
                queryResults: this.state.queryResults,
                searchWord: this.state.searchWord,
                selectedLanguage: this.state.selectedLanguage,
              }}
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
