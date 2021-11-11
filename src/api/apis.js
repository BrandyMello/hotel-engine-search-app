const getRepositories = (query, language) => {
  return fetch(
    `https://api.github.com/search/repositories?q=${query}+language:${
      language ? language : ""
    }&sort=stars&order=desc`
  )
    .then((resp) => {
      if (!resp.ok) {
        throw Error("There was an error");
      }
      return resp.json();
    })
    .catch((err) => {
      throw err;
    });
};

export default getRepositories;
