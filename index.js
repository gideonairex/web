'use strict';

var Hapi = require( 'hapi' );
var server = new Hapi.Server();

console.log( 'yami' );
console.log( 'testing' );
server.connection( {
	'port' : 9898
} );

server.route( [
	{
		'method' : 'GET',
		'path' : '/v1/hello',
		'handler' : function ( request, reply ) {
			return reply( 'Hello World' );
		}
	},
	{
		'method' : 'GET',
		'path' : '/v2/hello',
		'handler' : function ( request, reply ) {
			return reply( 'Hello World version 2' );
		}
	},
	{
		'method' : 'GET',
		'path' : '/v3/hello',
		'handler' : function ( request, reply ) {
			return reply( 'Hello World version 3' );
		}
	},
	{
		'method' : 'GET',
		'path' : '/v4/hello',
		'handler' : function ( request, reply ) {
			return reply( 'Hello World version 4' );
		}
	},
	{
		'method' : 'GET',
		'path' : '/v5/hello',
		'handler' : function ( request, reply ) {
			return reply( 'Hello World version 5' );
		}
	},
	{
		'method' : 'GET',
		'path' : '/v1/world',
		'handler' : function ( request, reply ) {
			return reply( 'World Tour Yey!!!' );
		}
	}
] );

server.start( function ( error ) {

	if ( error ) {
		throw error;
	}

	console.log( 'Server started ' + server.info.uri );
} );
