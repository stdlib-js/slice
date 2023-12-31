/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable max-len */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isArray = require( '@stdlib/assert/is-array' );
var S = require( './../../../ctor' );
var MultiSlice = require( './../../../multi' );
var pkg = require( './../package.json' ).name;
var nonreducedDimensions = require( './../lib' );


// MAIN //

bench( pkg+'::ndims=1', function benchmark( b ) {
	var values;
	var out;
	var i;

	/* eslint-disable new-cap */

	values = [
		new MultiSlice( S( null, null, null ) ),
		new MultiSlice( S( 0, 10, 2 ) ),
		new MultiSlice( S( null, 10, 2 ) ),
		new MultiSlice( S( 0, null, 2 ) ),
		new MultiSlice( S( 0, 10, null ) ),
		new MultiSlice( S( -20, -5, -2 ) ),
		new MultiSlice( S( 5, 20, 2 ) ),
		new MultiSlice( S( null, null, -1 ) ),
		new MultiSlice( S( 5, -20, -2 ) ),
		new MultiSlice( S( 20, null, -1 ) ),
		new MultiSlice( S( 0, -2, 2 ) ),
		new MultiSlice( S( -5, null, 2 ) ),
		new MultiSlice( 1 )
	];

	/* eslint-enable new-cap */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = nonreducedDimensions( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::ndims=2', function benchmark( b ) {
	var values;
	var out;
	var i;

	/* eslint-disable new-cap */

	values = [
		new MultiSlice( S( 2, 10, 2 ), S( null, null, null ) ),
		new MultiSlice( S( 2, 10, 2 ), S( 0, 10, 2 ) ),
		new MultiSlice( S( 2, 10, 2 ), S( null, 10, 2 ) ),
		new MultiSlice( S( 2, -10, 2 ), S( 0, null, 2 ) ),
		new MultiSlice( S( -2, 10, 2 ), S( 0, 10, null ) ),
		new MultiSlice( S( 2, 10, 2 ), S( -20, -5, -2 ) ),
		new MultiSlice( S( 2, null, -2 ), S( 5, 20, 2 ) ),
		new MultiSlice( S( 2, 10, 2 ), S( null, null, -1 ) ),
		new MultiSlice( S( 20, -10, -2 ), S( 5, -20, -2 ) ),
		new MultiSlice( S( 2, 10, 2 ), S( 20, null, -1 ) ),
		new MultiSlice( S( 2, 10, 2 ), S( 0, -2, 2 ) ),
		new MultiSlice( S( 2, 10, 2 ), S( -5, null, 2 ) ),
		new MultiSlice( 1, 2 )
	];

	/* eslint-enable new-cap */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = nonreducedDimensions( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::ndims=3', function benchmark( b ) {
	var values;
	var out;
	var i;

	/* eslint-disable new-cap */

	values = [
		new MultiSlice( S(), S( 2, 10, 2 ), S( null, null, null ) ),
		new MultiSlice( S(), S( 2, 10, 2 ), S( 0, 10, 2 ) ),
		new MultiSlice( S(), S( 2, 10, 2 ), S( null, 10, 2 ) ),
		new MultiSlice( S(), S( 2, -10, 2 ), S( 0, null, 2 ) ),
		new MultiSlice( S(), S( -2, 10, 2 ), S( 0, 10, null ) ),
		new MultiSlice( S(), S( 2, 10, 2 ), S( -20, -5, -2 ) ),
		new MultiSlice( S(), S( 2, null, -2 ), S( 5, 20, 2 ) ),
		new MultiSlice( S(), S( 2, 10, 2 ), S( null, null, -1 ) ),
		new MultiSlice( S(), S( 20, -10, -2 ), S( 5, -20, -2 ) ),
		new MultiSlice( S(), S( 2, 10, 2 ), S( 20, null, -1 ) ),
		new MultiSlice( S(), S( 2, 10, 2 ), S( 0, -2, 2 ) ),
		new MultiSlice( S(), S( 2, 10, 2 ), S( -5, null, 2 ) ),
		new MultiSlice( 1, 2, 3 )
	];

	/* eslint-enable new-cap */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = nonreducedDimensions( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::ndims=4', function benchmark( b ) {
	var values;
	var out;
	var i;

	/* eslint-disable new-cap */

	values = [
		new MultiSlice( S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( null, null, null ) ),
		new MultiSlice( S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( 0, 10, 2 ) ),
		new MultiSlice( S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( null, 10, 2 ) ),
		new MultiSlice( S( 2, null, -1 ), S(), S( 2, -10, 2 ), S( 0, null, 2 ) ),
		new MultiSlice( S( 2, null, -1 ), S(), S( -2, 10, 2 ), S( 0, 10, null ) ),
		new MultiSlice( S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( -20, -5, -2 ) ),
		new MultiSlice( S( 2, 5, -1 ), S(), S( 2, null, -2 ), S( 5, 20, 2 ) ),
		new MultiSlice( S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( null, null, -1 ) ),
		new MultiSlice( S( 2, null, -1 ), S(), S( 20, -10, -2 ), S( 5, -20, -2 ) ),
		new MultiSlice( S( 2, -5, -1 ), S(), S( 2, 10, 2 ), S( 20, null, -1 ) ),
		new MultiSlice( S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( 0, -2, 2 ) ),
		new MultiSlice( S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( -5, null, 2 ) ),
		new MultiSlice( 1, 2, 3, 4 )
	];

	/* eslint-enable new-cap */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = nonreducedDimensions( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::ndims=5', function benchmark( b ) {
	var values;
	var out;
	var i;

	/* eslint-disable new-cap */

	values = [
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( null, null, null ) ),
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( 0, 10, 2 ) ),
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( null, 10, 2 ) ),
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( 2, -10, 2 ), S( 0, null, 2 ) ),
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( -2, 10, 2 ), S( 0, 10, null ) ),
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( -20, -5, -2 ) ),
		new MultiSlice( S(), S( 2, 5, -1 ), S(), S( 2, null, -2 ), S( 5, 20, 2 ) ),
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( null, null, -1 ) ),
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( 20, -10, -2 ), S( 5, -20, -2 ) ),
		new MultiSlice( S(), S( 2, -5, -1 ), S(), S( 2, 10, 2 ), S( 20, null, -1 ) ),
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( 0, -2, 2 ) ),
		new MultiSlice( S(), S( 2, null, -1 ), S(), S( 2, 10, 2 ), S( -5, null, 2 ) ),
		new MultiSlice( 1, 2, 3, 4, 5 )
	];

	/* eslint-enable new-cap */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = nonreducedDimensions( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
