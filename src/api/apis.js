const getRepositories = async (query, language) => {
  fetch(
    `https://api.github.com/search/repositories?q=${query}+language:${language ? language : ''}&sort=stars&order=desc`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default getRepositories;
