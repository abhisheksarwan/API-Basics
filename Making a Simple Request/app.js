var request = require("request");

request("https://www.google.com", function(error, response, body){ //don't mess with the order
    if(error){
        console.log("Something went wrong!");
    }
    else{
        if(response.statusCode == 200){
            console.log("Everything's Fine!");
        }
    }
});