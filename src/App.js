import React, { Component } from 'react';
import getRepositories from "./api/apis";
import logo from './assets/images/octocatFlavors.png';
import './assets/stylesheets/App.scss';
import SearchForm from './components/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      queryData: [],
    };
  }
  handleSubmit = (e, searchWord, selectedLanguage) => {
    e.preventDefault();
    getRepositories(searchWord, selectedLanguage).then((data) => {
      this.setState({ queryData: data.items })}
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Search Your Favorite Octocat Flavor</h1>
          <SearchForm handleSubmit={this.handleSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
