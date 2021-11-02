import React from 'react';

const Repo = ({ queryResults, singleRepoId, showSingleRepo = false }) => {
  console.log(queryResults, singleRepoId, showSingleRepo);
  const singleRepo = queryResults.find(query => query.id === singleRepoId);
  const { name, stargazers_count: stars, owner, description, language } = singleRepo;
  const ownerName = owner.login || ';'
  console.log({ singleRepo });
  return (
    <ul className="single-repo-card">
      <li>Repo: {name}</li>
      <li>Stars: {stars}</li>
      <li>Owner: {ownerName}</li>
      <li>Description: {description}</li>
      <li>Language: {language}</li>
    </ul>
  );
};

export default Repo;