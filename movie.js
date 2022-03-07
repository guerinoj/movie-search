class Movie {

    getMovies(search) {
    let url = "http://www.omdbapi.com/?apikey=f6e256e1&s=" + search;

    const response =  fetch(url)
      .then(response => response.json())
      .then(data => {
        return data
      })
    
      return response
  }

  createDOM(movie) {
    let movieDOM = document.createElement("div");
    movieDOM.classList = "col-4"

    movieDOM.innerHTML = `
    <figure>
      <img src ="${movie.Poster}" alt="${movie.Title}">
      <figcaption>
        <h2>${movie.Title}</h2>
        <p>${movie.Type} - ${movie.Year}</p> 
      </figcaption>
    </figure>
    `;

    return movieDOM;
  }
}
