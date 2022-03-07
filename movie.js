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

  createDOM(data) {
    let movieDOM = document.createElement("div");
    movieDOM.classList = "col-4"

    movieDOM.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.Plot}</p> `;

    return movieDOM;
  }
}
