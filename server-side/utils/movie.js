const request = require("request");

function getMovieList(searchMovie, callback) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    searchMovie
  )}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDE5OWJjMzk2OGRhNmI4NmI2OGI0ODUwNjM4ZTQ1NyIsIm5iZiI6MTczNDQ1OTk2NS4zOTkwMDAyLCJzdWIiOiI2NzYxYzIzZDVmOGE4OWQyMzJkMzQxZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1UnwyZgpVGH5fywxk-SEF66ITvG8d0LBLFjwbe33a2I",
    },
  };
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Can not connect to movie services", undefined);
    } else if (response.statusCode !== 200) {
      callback("This is not right, try again!", undefined);
    } else {
      callback(undefined, response.body.results?.title);
    }
  });
}

module.exports = getMovieList;
