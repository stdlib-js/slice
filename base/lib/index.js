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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name args2multislice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/args2multislice}
*/
setReadOnly( ns, 'args2multislice', require( './../../base/args2multislice' ) );

/**
* @name sliceLength
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/length}
*/
setReadOnly( ns, 'sliceLength', require( './../../base/length' ) );

/**
* @name nonreducedDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/nonreduced-dimensions}
*/
setReadOnly( ns, 'nonreducedDimensions', require( './../../base/nonreduced-dimensions' ) );

/**
* @name normalizeMultiSlice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/normalize-multi-slice}
*/
setReadOnly( ns, 'normalizeMultiSlice', require( './../../base/normalize-multi-slice' ) );

/**
* @name normalizeSlice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/normalize-slice}
*/
setReadOnly( ns, 'normalizeSlice', require( './../../base/normalize-slice' ) );

/**
* @name reducedDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/reduced-dimensions}
*/
setReadOnly( ns, 'reducedDimensions', require( './../../base/reduced-dimensions' ) );

/**
* @name sargs2multislice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/sargs2multislice}
*/
setReadOnly( ns, 'sargs2multislice', require( './../../base/sargs2multislice' ) );

/**
* @name seq2multislice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/seq2multislice}
*/
setReadOnly( ns, 'seq2multislice', require( './../../base/seq2multislice' ) );

/**
* @name seq2slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/seq2slice}
*/
setReadOnly( ns, 'seq2slice', require( './../../base/seq2slice' ) );

/**
* @name sliceShape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/shape}
*/
setReadOnly( ns, 'sliceShape', require( './../../base/shape' ) );

/**
* @name slice2seq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/slice2seq}
*/
setReadOnly( ns, 'slice2seq', require( './../../base/slice2seq' ) );

/**
* @name str2multislice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/str2multislice}
*/
setReadOnly( ns, 'str2multislice', require( './../../base/str2multislice' ) );

/**
* @name str2slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/slice/base/str2slice}
*/
setReadOnly( ns, 'str2slice', require( './../../base/str2slice' ) );


// EXPORTS //

module.exports = ns;
