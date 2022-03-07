window.addEventListener("DOMContentLoaded", async function (e) {

  //Analyse de l'URL
  const query = window.location.search;
  const urlParams = new URLSearchParams(query);

  if (urlParams.has("search")) {

    let container = document.querySelector("#movies_list");
    let movieDOM = new Movie;
    let search = urlParams.get('search');

    // S'il y a une page alors je la récupère sinon par défaut je prends la première.
    page = (urlParams.has("page") ? urlParams.get('page') : 1)

    let response = await movieDOM.getMovies(search, page);

    if (response.Response == "True") {
      let movies = response.Search;

      console.log(response);
      let message = "Le nombre de films trouvés est de " + response.totalResults;

      let div = displayMessage(message, "success");
      container.appendChild(div);

      //Pour chaque film, je génère le DOM
      movies.forEach(movie => {
        container.appendChild(movieDOM.createDOM(movie));
      });

      let pageTotal = calculatePageNumber(response.totalResults);
      createPagination(pageTotal,"?search="+search);

    } else {
      let div = displayMessage(response.Error, "danger");
      container.appendChild(div);
    }
  }

})

function displayMessage(message, color) {
  let div = document.createElement("div");
  div.classList = "alert alert-" + color;
  div.textContent = message;

  return div;
}

function calculatePageNumber(nbTotal, nbPerPage = 10) {
  return Math.ceil(nbTotal / nbPerPage)
}

function createPagination(nbPage, url) {
  let ul = document.querySelector(".pagination");

  for (let i = 1; i <= nbPage; i++) {
    let li = document.createElement("li");
    li.classList = "page-item";
    li.innerHTML = `<a class="page-link" href="${url}&page=${i}">${i}</a>`;
    ul.appendChild(li);
  }
}
