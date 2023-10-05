var request = require("request");
var Hashids = require("hashids");

exports.handler = (event, context, callback) => {
    // Set the root URL according to the Netlify site we are within
    // var rootURL = process.env.URL + "/";
    var rootURL = "https://linkylinky.netlify.app/";

    // get the details of what we are creating
    var destination = event.queryStringParameters["to"];

    // gennerate a unique short code (stupidly for now)
    var hash = new Hashids();
    var number = Math.round(new Date().getTime() / 100);
}