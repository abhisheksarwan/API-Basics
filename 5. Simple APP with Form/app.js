var express = require("express");
var app = express();
var request = require("request");

//root route
app.get("/", function(req, res){
    res.send("Homepage!");
});

//search page
app.get("/search", function(req, res){ 
    res.render("search.ejs");
});

//reults page
app.get("/results", function(req, res){
    var keyword = req.query.keyword; //getting the search keyword
    request("http://www.omdbapi.com/?s=" + keyword + "&apikey=99ecb386", function(error, response, body){
        if(!error && response.statusCode == 200){
            console.log("Everythings Fine!");
            var data = JSON.parse(body); //converting string to JSON
            res.render("results.ejs",{data:data}) //passing JSON to results.ejs
        }
        else{
            console.log("Somethings wrong!");
        }
    });
});

app.listen(3000, function(){
    console.log("Server has started.");
});