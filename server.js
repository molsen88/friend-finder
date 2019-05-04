const express = require( "express" );
const path = require( "path" );

var app = express();
var PORT = process.envPORT || 3000;

app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() );

console.log( "Listening at PORT: " + PORT )

require( "./routing/apiRoutes" )( app );
require( "./routing/htmlRoutes" )( app );




app.listen( PORT, function () {
    console.log( "App listening on PORT: " + PORT );
} );