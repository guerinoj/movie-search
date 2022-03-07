document.querySelector("#send").addEventListener("click", async function () {
  let container = document.querySelector("#movies_list");

  let movieDOM = new Movie; 
  let response = await movieDOM.getMovies(search.value);
 


  if (response.Response =="True") {
    let movies = response.Search;
  } else {
    let div = document.createElement("div");
    div.classList = "alert alert-danger";
    div.textContent = response.Error;
    container.appendChild(div);
  }
  
  console.log(response.Search);

  //container.appendChild(movieDOM);
 

  console.log(container);
})