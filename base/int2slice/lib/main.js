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

var Slice = require( './../../../ctor' );
var eOutOfBounds = require( './error_out_of_bounds.js' );


// MAIN //

/**
* Converts an integer to a Slice object.
*
* @param {integer} value - input value
* @param {NonNegativeInteger} max - index upper bound
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @returns {(Slice|Object)} Slice object or an error object
*
* @example
* var s = int2slice( -4, 10, false );
* // returns <Slice>
*
* var start = s.start;
* // returns 6
*
* var stop = s.stop;
* // returns 7
*
* var step = s.step;
* // returns 1
*/
function int2slice( value, max, strict ) {
	// If a value exceeds the last possible index, create an "empty" slice...
	if ( value >= max ) {
		if ( strict ) {
			return eOutOfBounds();
		}
		return new Slice( max, max, 1 );
	}
	// Check whether we need to resolve a slice relative to the last possible index...
	if ( value < 0 ) {
		value = max + value;

		// If a value exceeds the first index, create an "empty" slice...
		if ( value < 0 ) {
			if ( strict ) {
				return eOutOfBounds();
			}
			return new Slice( 0, 0, 1 );
		}
		return new Slice( value, value+1, 1 ); // e.g., Slice( 2, 3, 1 ), which is the slice equivalent of only selecting the second row
	}
	// 0 <= s < N
	return new Slice( value, value+1, 1 );
}


// EXPORTS //

module.exports = int2slice;
