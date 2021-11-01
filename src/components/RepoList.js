import React from "react";

const SearchResultsDisplay = ({ queryData }) => {
  const { queryResults, searchWord, selectedLanguage } = queryData;
  const diaplayResults = queryResults.map((repo) => (
    <div className={`repo-container`} key={repo.id}>
      <p>{repo.name}</p>
    </div>
  ));

  return (
    <div>
      <h2>
        Your repository search for {searchWord}
        {selectedLanguage.length > 1 ? ` in ${selectedLanguage}` : ""}{" "}
        returned...
      </h2>
      <div className="repo-list-container">{diaplayResults}</div>
    </div>
  );
};

export default SearchResultsDisplay;
