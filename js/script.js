// this is for finding a movie by its title

let titleSearch = document.getElementById('movie-title'); 
titleSearch.onsubmit = displayTitle(); 

function displayTitle(){
    let movieTitle = document.getElementById('movie-search').value;
    fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=bfcb574d`)
    .then(response => {
        console.log(response.json())
    })
    .catch(error => console.log(error))
}