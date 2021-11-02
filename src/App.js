import React, { Component } from 'react';
import { Route } from "react-router-dom";
import getRepositories from "./api/apis";
import logo from './assets/images/octocatFlavors.png';
import './assets/stylesheets/App.scss';
import SearchForm from './components/SearchForm';
import RepoList from './components/RepoList';
import Repo from './components/Repo';


class App extends Component {
  constructor() {
    super();
    this.state = {
      queryResults: [],
      searchWord: '',
      selectedLanguage: '',
      singleRepoId: null,
      showSingleRepo: false
    };
  }
  handleSubmit = (e, searchWord, selectedLanguage) => {
    e.preventDefault();
    getRepositories(searchWord, selectedLanguage)
      .then((data) => {
        console.log({data});
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
  getSingleRepoId = (id) => {
    this.setState({ singleRepoId: id });
  }
  toggleShowSingleRepo = () => {
    this.setState({ showSingleRepo: !this.state.showSingleRepo });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route
            exact
            path="/"
            render={() => (
              <>
                {this.state.queryResults.length < 1 && (
                  <SearchForm handleSubmit={this.handleSubmit} />
                )}
                {this.state.queryResults.length > 0 &&
                  !this.state.showSingleRepo && (
                    <RepoList
                      clearSearch={this.clearSearch}
                      queryData={{
                        queryResults: this.state.queryResults,
                        searchWord: this.state.searchWord,
                        selectedLanguage: this.state.selectedLanguage,
                      }}
                      getSingleRepoId={this.getSingleRepoId}
                      toggleShowSingleRepo={this.toggleShowSingleRepo}
                    />
                  )}
              </>
            )}
          />
          <Route
            exact
            path="/repo/:id"
            render={() => (
              <Repo
                queryResults={this.state.queryResults}
                singleRepoId={this.state.singleRepoId}
                showSingleRepo={this.state.showSingleRepo}
                clearSearch={this.clearSearch}
              />
            )}
          />
        </header>
      </div>
    );
  }
}

export default App;
