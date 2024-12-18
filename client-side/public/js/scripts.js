const input = document.querySelector("movieInput");
const form = document.querySelector("movieForm");
const movieContainer = document.querySelector("movieContainer");
const output = document.querySelector(".movieResults");

function getMovieList() {

  const movie = input.value
  fetch(`/movie?search=${movie}`)
    .then((response) => response.json())
    .then((data) => {
      // Handle the data
      console.log(data);
      if (data.error) {
        output.textContent = data.error;
      } else if (data.results && data.results.length > 0) {
        output.textContent = data.results[0].title;
      } else {
        output.textContent = "No results found";
      }
    })
    .catch((error) => {
      // Handle any errors
      console.error("There was a problem with the fetch operation:", error);
    });
}

form.addEventListener("submit", getMovieList);

const url = "/movie?search=";
