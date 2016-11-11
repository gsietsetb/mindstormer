/*
 Hyperspace by HTML5 UP
 html5up.net | @ajlkn
 Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 */
// These code snippets use an open-source library. http://unirest.io/java


function addToList(var res, var id) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Four"));
    li.setAttribute("id", id);
    ul.appendChild(li);
}

function matchWords() {
    var w1 = document.getElementById("n1");
    var w2 = document.getElementById("n2");
    /* var url = "https://wordsapiv1.p.mashape.com/words/";
     var response = Unirest.get("https://wordsapiv1.p.mashape.com/words/bump/also")
     .header("X-Mashape-Key", "limGFRxxENmshLHRmngoN0fMVnDPp1ElH7kjsn1BNY1ubvvtNk")
     .header("Accept", "application/json")
     .asJson();
     */
   var res =
//JSON.parse(httpGet(url.concat(w1)).concat("synonyms"));

//JSON.parse(httpGet(url.concat(w2)).concat("synonyms"));
var i;
for (i = 0; i < res1.length; i++) {
    addToList(res1.concat(res2), i);
}
}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// File: main.js

var fs = require('fs');
var client = require("swagger-client");

function testDetailsWords() {
    var args = {};
    args['word'] = "lovely"; // Word
    args['detail'] = "definitions"; // Detail

    swagger.Words.details(args, function(response) {
        /* success callback */
        console.log("Result of Words.details");
        var result = response.obj;
        // print parsed result
        console.log(result);
        // print raw response in string
        console.log(response.data.toString());
    }, function(response) {
        /* error callback */
        console.log('Error for Words.details:', response.status); // status code
        console.log(response.data.toString()); // raw response
        //console.log(response.headers); // http headers for JS
        //console.log(response.headers.normalized); // http headers for Node.js
    });
}

function testGetWords() {
    var args = {};
    args['word'] = "soliloquy"; // Word

    swagger.Words.get(args, function(response) {
        /* success callback */
        console.log("Result of Words.get");
        var result = response.obj;
        // print parsed result
        console.log(result);
        // print raw response in string
        console.log(response.data.toString());
    }, function(response) {
        /* error callback */
        console.log('Error for Words.get:', response.status); // status code
        console.log(response.data.toString()); // raw response
        //console.log(response.headers); // http headers for JS
        //console.log(response.headers.normalized); // http headers for Node.js
    });
}

function main() {
    /* Resource: Words */

    console.log("Calling endpoint: details");
    testDetailsWords();

    console.log("Calling endpoint: get");
    testGetWords();
}

var swagger = new client({
    url: 'http://files1.restunited.com/libraries/www_wordsapi_com_022946/beta/0/1/0/sw/swagger2/swagger.json',
    success: function() {
        // configure authentications
        swagger.clientAuthorizations.add("Default", new client.ApiKeyAuthorization("accessToken", "YOUR_API_KEY", "query"));

        // run all tests
        main();
    }
});

// Run this file:
//   node main.js