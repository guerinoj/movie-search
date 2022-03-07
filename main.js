document.querySelector("#send").addEventListener("click", async function () {
  let container = document.querySelector("#movies_list");
  console.log(search.value);

  let movieDOM = new Movie; 
  let response = await movieDOM.getData(search.value);
 
  if (response.Response =="True") {
    let movies = response.Search;
  } else {
    let div = document.createElement("div");
    div.classList = "alert alert-danger";
    div.textContent = response.Error;
    container.appendChild(div);
  }
  
  console.log(movies);

  //container.appendChild(movieDOM);
 

  console.log(container);
})