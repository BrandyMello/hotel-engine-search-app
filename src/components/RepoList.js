import React from "react";

const SearchResultsDisplay = ({ queryData, clearSearch }) => {
  const { queryResults, searchWord, selectedLanguage } = queryData;
  const diaplayResults = queryResults.map((repo) => (
    <div className={`repo-container`} key={repo.id}>
      <p>{repo.name}</p>
    </div>
  ));

  return (
    <div className="repo-list-component-container">
      <h2>
        Your repository search for {searchWord}
        {selectedLanguage.length > 1 ? ` in ${selectedLanguage}` : ""}{" "}
        returned...
      </h2>
      <button onClick={() => clearSearch()}>Search Again</button>
      <div className="repo-list-container">{diaplayResults}</div>
      <button onClick={() => clearSearch()}>Search Again</button>
    </div>
  );
};

export default SearchResultsDisplay;
