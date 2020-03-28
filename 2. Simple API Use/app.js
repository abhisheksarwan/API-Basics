var request = require("request");

request("https://jsonplaceholder.typicode.com/users/1", (error, response, body) => { //just a newer syntax // arrow function
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body); //converting returned string into JSON
        console.log(parsedData.name);
    }
})