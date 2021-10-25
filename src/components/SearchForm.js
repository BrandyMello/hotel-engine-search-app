import React, { useState } from 'react';
import getRepositories from '../api/apis';

const SearchForm = () => {
  const [searchWord, setSearchWord] = useState('');
  const [selectedLanguage, selectLanguage] = useState('');
  console.log(searchWord);
  const handleSubmit = (e) => {
    e.preventDefault();
    getRepositories(searchWord, selectedLanguage);
  }
  return (
    <>
      <form className="search_form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search_input"
          type="text"
          value={searchWord}
          placeholder="Search"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Language"
          value={selectedLanguage}
          onChange={(e) => selectLanguage(e)}
        />
        <button type="submit" value="Submit">Submit</button>
      </form>
    </>
  );
}

export default SearchForm;