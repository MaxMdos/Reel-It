fetch("http://www.omdbapi.com/?apikey=bfcb574d")
    .then(response => {
        response.json()
        console.log(response)
    })