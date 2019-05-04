var path = require( "path" );

module.exports = function ( app ) {

    app.get( "/survey", function ( res, req ) {
        res.sendFile( path.join( __dirname, "../public/survey.html" ) );
    } )

    app.get( "*", function ( res, req ) {
        res.sendFile( path.join( __dirname, "../public/home.html" ) )
    } )
}