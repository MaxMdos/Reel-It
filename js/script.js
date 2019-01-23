fetch("http://www.omdbapi.com/?t=aquaman&apikey=bfcb574d")
    .then(response => {
        response.json()
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))