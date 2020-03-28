var express = require("express");
var app = express();
var request = require("request");

//root route
app.get("/", function(req, res){
    res.send("Homepage!");
});

//results route
app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=narnia&apikey=99ecb386", function(error, response, body){
        if(!error && response.statusCode == 200){
            console.log("Everythings Fine!");
            var results = JSON.parse(body); //converting returned string into JSON
            res.send(results.Search[0].Title);
        }
        else{
            console.log("Somethings wrong!");
        }
    });
});

app.listen(3000, function(){
    console.log("Server has started.");
});