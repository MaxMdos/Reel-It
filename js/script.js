// this is for finding a movie by its title
// let movieTitle = document.getElementById('movie-search').value
fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=bfcb574d`)
    .then(response => {
        console.log(response.json())
    })
    .catch(error => console.log(error))