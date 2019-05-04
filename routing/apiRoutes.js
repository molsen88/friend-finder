var path = require( "path" );
var express = require( "express" )

module.exports = function ( app ) {
    app.get( "/api/friends", function ( res, req ) {
        res.json( friendData )
    } )
    // app.post( "/app/data/friends.js", function ( res, req ) {
    //     if{}
    // } )


}