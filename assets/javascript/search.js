var searchTerm = "Super Bowl";
var apiKey = "neZ7wWOtEo8Ktg0iffQHz6MQGsnTEjXj";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey;



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(queryURL);
});