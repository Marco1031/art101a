// author: Marco Bernal
// date: June 7, 2024
// lab 16 json and APIs


$(document).ready(function() {
    let currentComic = 0;

    function fetchComic(comicNum) {
        let url = comicNum ? `https://xkcd.com/${comicNum}/info.0.json` : 'https://xkcd.com/info.0.json';
        
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(data) {
                currentComic = data.num;
                $('#output').html(`
                    <h3>${data.title}</h3>
                    <img src="${data.img}" alt="${data.alt}" title="${data.alt}">
                    <p>${data.alt}</p>
                `);
            },
            error: function (jqXHR, textStatus, errorThrown) { 
                console.log("Error:", textStatus, errorThrown);
            }
        });
    }

    // Fetch latest comic on page load
    fetchComic();

    // Event listeners for navigation buttons
    $('#prev').click(function() {
        if (currentComic > 1) {
            fetchComic(currentComic - 1);
        }
    });

    $('#next').click(function() {
        fetchComic(currentComic + 1);
    });
});
