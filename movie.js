class Movie {

  getMovies(search, page = 1) {
    let url = "http://www.omdbapi.com/?apikey=f6e256e1&s=" + search + "&page=" + page;

    const response = fetch(url)
      .then(response => response.json())
      .then(data => {
        return data
      })

    return response
  }

  createDOM(movie) {
    let movieDOM = document.createElement("div");
    movieDOM.classList = "col col-md-6 col-lg-4"

    movieDOM.innerHTML = `
    <figure>
      <img class="img-responsive" src ="${movie.Poster}" alt="${movie.Title}">
      <figcaption>
        <h2>${movie.Title}</h2>
        <p>${movie.Type} - ${movie.Year}</p> 
      </figcaption>
    </figure>
    `;

    return movieDOM;
  }
}
