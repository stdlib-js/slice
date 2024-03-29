/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var tape = require( 'tape' );
var isSlice = require( '@stdlib/assert/is-slice' );
var Slice = require( './../../../ctor' );
var int2slice = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof int2slice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts an integer to a Slice object', function test( t ) {
	var expected;
	var actual;
	var values;
	var max;
	var s;
	var i;

	max = [
		10,
		20,
		5
	];

	values = [
		5,
		-4,
		-1
	];
	expected = [
		new Slice( 5, 6, 1 ),
		new Slice( 16, 17, 1 ),
		new Slice( 4, 5, 1 )
	];

	for ( i = 0; i < values.length; i++ ) {
		s = expected[ i ];

		// Non-strict mode:
		actual = int2slice( values[ i ], max[ i ], false );
		t.strictEqual( isSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );

		// Strict mode:
		actual = int2slice( values[ i ], max[ i ], true );
		t.strictEqual( isSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
	}
	t.end();
});

tape( 'the function converts an integer to a Slice object (out-of-bounds, non-strict)', function test( t ) {
	var expected;
	var actual;
	var values;
	var max;
	var s;
	var i;

	max = [
		10,
		10,
		5,
		5
	];

	values = [
		12,
		-15,
		8,
		-6
	];
	expected = [
		new Slice( 10, 10, 1 ),
		new Slice( 0, 0, 1 ),
		new Slice( 5, 5, 1 ),
		new Slice( 0, 0, 1 )
	];

	for ( i = 0; i < values.length; i++ ) {
		s = expected[ i ];
		actual = int2slice( values[ i ], max[ i ], false );
		t.strictEqual( isSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
	}
	t.end();
});

tape( 'in strict mode, the function returns an error object when an input value exceeds index bounds (integers)', function test( t ) {
	var expected;
	var actual;
	var values;
	var max;
	var i;

	max = [
		10,
		10,
		5,
		5
	];

	values = [
		12,
		-15,
		8,
		-6
	];
	expected = {
		'code': 'ERR_SLICE_OUT_OF_BOUNDS'
	};

	for ( i = 0; i < values.length; i++ ) {
		actual = int2slice( values[ i ], max[ i ], true );
		t.deepEqual( actual, expected, 'returns expected value for ' + values[ i ].toString() );
	}
	t.end();
});
