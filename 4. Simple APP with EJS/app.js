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