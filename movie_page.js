window.addEventListener("DOMContentLoaded", async function (e) {

  //Analyse de l'URL
  const query = window.location.search;
  const urlParams = new URLSearchParams(query);

  if (urlParams.has("id")) {
    let movie = new Movie;
    let id = urlParams.get('id');

    movie.createMovie(id);
  }

})