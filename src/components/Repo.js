import React from 'react';

const Repo = ({ queryResults, singleRepoId, showSingleRepo = false }) => {
  console.log(queryResults, singleRepoId, showSingleRepo);
  const singleRepo = queryResults.find(query => query.id === singleRepoId);
  const { name } = singleRepo;
  console.log({ singleRepo });
  return <div>Hello {name}</div>;
};

export default Repo;