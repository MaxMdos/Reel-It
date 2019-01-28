// this is for finding a movie by its title
let button = document.getElementById('butt'); 
let root = document.getElementById('root'); 
let result = document.getElementById('movie-res');
// result = ""; 

button.onclick = () => {
    let movieTitle = document.getElementById('title-search').value
    fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=bfcb574d`)
    // returns promise - just the promise...
    .then(response => response.json())
    // returns the actual json thingy...
    .then(response => {
        console.log(response)
        apTitle(response)
    })
    .catch(error => console.log(error))
}

function apTitle(movie){
   result.innerHTML = `
   <img src='${movie.Poster}'>
   <h1>${movie.Title}</h1>
   <p>${movie.Director}</p>
   <p>${movie.Released}</p>
   `
}