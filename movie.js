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

  getMovie(id) {
    let url = "http://www.omdbapi.com/?apikey=f6e256e1&i=" + id;

    const response = fetch(url)
      .then(response => response.json())
      .then(data => {
        return data
      })
    return response
  }

  async createMovie(id){
    let movie = await this.getMovie(id); 
    console.log(movie);
    document.querySelector("h1").textContent = movie.Title;
    document.querySelector(".plot").textContent = movie.Plot;
    document.querySelector("#actors").textContent = movie.Actors;
    document.querySelector("#director").textContent = movie.Director;
    document.querySelector("#release").textContent = movie.Released;
    document.querySelector("img").src = movie.Poster;

    
  }

  createDOM(movie) {
    let movieDOM = document.createElement("div");
    movieDOM.classList = "col-12 col-md-6 col-lg-4";

    if (movie.Poster == "N/A")
      movie.Poster = "https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGhlYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"

    movieDOM.innerHTML = `
    <a href = "movie.html?id=${movie.imdbID}">
      <figure>
        <img class="img-fluid  w-100" src ="${movie.Poster}" alt="${movie.Title}">
        <figcaption>
          <h2>${movie.Title}</h2>
          <p>${movie.Type} - ${movie.Year}</p> 
        </figcaption>
      </figure>
    </a>
    `;

    return movieDOM;
  }
}
