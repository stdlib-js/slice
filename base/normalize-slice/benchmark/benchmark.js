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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isSlice = require( '@stdlib/assert/is-slice' );
var Slice = require( './../../../ctor' );
var pkg = require( './../package.json' ).name;
var normalizeSlice = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Slice( null, null, null ),
		new Slice( 0, 10, 2 ),
		new Slice( null, 10, 2 ),
		new Slice( 0, null, 2 ),
		new Slice( 0, 10, null ),
		new Slice( -20, -5, -2 ),
		new Slice( 5, 20, 2 ),
		new Slice( null, null, -1 ),
		new Slice( 5, -20, -2 ),
		new Slice( 20, null, -1 ),
		new Slice( 0, -2, 2 ),
		new Slice( -5, null, 2 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = normalizeSlice( values[ i%values.length ], 10, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
