import React from "react";
import { useHistory } from "react-router-dom";

const RepoList = ({ queryData, clearSearch, getSingleRepoId, toggleShowSingleRepo }) => {
  const history = useHistory();
  const { queryResults, searchWord, selectedLanguage } = queryData;
  const diaplayResults = queryResults.map((repo) => (
    <button type="button" onClick={() => {
      getSingleRepoId(repo.id);
      toggleShowSingleRepo();
      history.push(`/repo/${repo.id}`);
      }} className={`repo-container`} key={repo.id}>
      <p>{repo.name}</p>
    </button>
  ));
  console.log(queryResults);
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

export default RepoList;
