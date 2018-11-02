$("#search").on("click", function(e){
    var query = $("#finder").val();
    const API = 'http://www.omdbapi.com/?apikey=bfcb574d'
    console.log(query);
    $.ajax({
        type:"GET",
        url:`${API}`,
        data: {
            t : finder.value
        },
        dataType:"json",
        success: function(res){
            $("#pic").attr("src", res.Poster);
            $("#list").html("<tr><td>Title: " + res.Title + "</td></tr><br>" + "<tr><td>Year: " + res.Year + "</td></tr><br>" + "<tr><td>Genre: " + res.Genre + "</td></tr>");                    
        }
    });
  
    e.preventDefault();
});
