//This will come from the form
var searchTerm = "Super Bowl";
var apiKey = "neZ7wWOtEo8Ktg0iffQHz6MQGsnTEjXj";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey;

//These will come from the form fields
var numResults = 0;
var startYear = 0;
var endYear = 0;

//search button function
function search(){
    //on button click
    

    event.preventDefault();
    //searchTerm = user input

}

//clear button function
function clearAllFields(){

}

//function to display results
function displayResults(){
    var results = $("<div>");

    results.append("You clicked the button");

    $(".panel-body").append(results);
    
}

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(queryURL);
});

displayResults();

$("#run-search").on("click", function(){
    event.preventDefault();
    console.log("You clicked the button");
    search(); 
});