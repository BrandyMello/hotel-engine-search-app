import React, { useState } from 'react';

const SearchForm = ({ handleSubmit }) => {
  const [searchWord, setSearchWord] = useState('');
  const [selectedLanguage, selectLanguage] = useState('');

  return (
    <>
      <form className="search_form" onSubmit={(e) => handleSubmit(e, searchWord, selectedLanguage)}>
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
          onChange={(e) => selectLanguage(e.target.value)}
        />
        <button type="submit" value="Submit" disabled={searchWord.length < 1} >Submit</button>
      </form>
    </>
  );
}

export default SearchForm;