window.addEventListener("DOMContentLoaded", async function (e) {


  const query = window.location.search;
  const urlParams = new URLSearchParams(query);

  if (urlParams.has("search")) {

    let container = document.querySelector("#movies_list");
    let movieDOM = new Movie;
    let search = urlParams.get('search');

    page = (urlParams.has("page") ? urlParams.get('page') : 1) 

    let response = await movieDOM.getMovies(search, page);

    if (response.Response == "True") {
      let movies = response.Search;

      movies.forEach(movie => {
        container.appendChild(movieDOM.createDOM(movie));
      });

    } else {
      let div = document.createElement("div");
      div.classList = "alert alert-danger";
      div.textContent = response.Error;
      container.appendChild(div);
    }
  }

})
