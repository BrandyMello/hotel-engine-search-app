import React from 'react';
import { useHistory } from 'react-router-dom';

const Repo = ({
  queryResults,
  singleRepoId,
  showSingleRepo = false,
  clearSearch,
}) => {
  const history = useHistory();
  const singleRepo = queryResults.find((query) => query.id === singleRepoId);
  const {
    name,
    stargazers_count: stars,
    owner,
    description,
    language,
  } = singleRepo;
  const ownerName = owner.login || "";
  console.log({ singleRepo });
  return (
    <>
      <button onClick={() => {
        clearSearch();
        history.push('/');
        }}
        >
          New Search
        </button>
      <ul className="single-repo-card">
        <li>Repo: {name}</li>
        <li>Stars: {stars}</li>
        <li>Owner: {ownerName}</li>
        <li>Description: {description}</li>
        <li>Language: {language}</li>
      </ul>
    </>
  );
};

export default Repo;