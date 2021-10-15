const trialFetch = async () => {
  // const queryString =
  //   "q=" + encodeURIComponent("GitHub Octocat in:readme user:defunkt");

  fetch(
    `https://api.github.com/search/code?${"q=document+in:file+language:js+user:neliojrr"}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default trialFetch;
