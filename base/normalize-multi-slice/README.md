<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# normalizeMultiSlice

> Normalize a [`MultiSlice`][@stdlib/slice/multi] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var normalizeMultiSlice = require( '@stdlib/slice/base/normalize-multi-slice' );
```

<a name="main"></a>

#### normalizeMultiSlice( slice, shape, strict )

Normalizes a [`MultiSlice`][@stdlib/slice/multi] object, where `shape` specifies the maximum allowed slice shape.

<!-- eslint-disable stdlib/no-redeclare, no-global-assign -->

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );

var shape = [ 10, 10, 10 ];

var s1 = new MultiSlice( new Slice( 2, null, 2 ), null, -4 );
var s2 = normalizeMultiSlice( s1, shape, false );
// returns <MultiSlice>

var d = s2.data;
// returns [ <Slice>, <Slice>, <Slice> ]

var v = d[ 0 ];
// returns <Slice>

var start = v.start;
// returns 2

var stop = v.stop;
// returns 10

var step = v.step;
// returns 2

v = d[ 1 ];
// returns <Slice>

start = v.start;
// returns 0

stop = v.stop;
// returns 10

step = v.step;
// returns 1

v = d[ 2 ];
// returns <Slice>

start = v.start;
// returns 6

stop = v.stop;
// returns 7

step = v.step;
// returns 1
```

When `strict` is `true`, the function returns an error object if an input slice exceeds index bounds.

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );

var s1 = new MultiSlice( new Slice( -20, 20, 1 ) );
var s2 = normalizeMultiSlice( s1, [ 10 ], true );
// returns { 'code': 'ERR_SLICE_OUT_OF_BOUNDS' }
```

A returned error object may have one of the following error codes:

-   **ERR_SLICE_OUT_OF_BOUNDS**: a slice exceeds index bounds.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```javascript
var S = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );
var normalizeMultiSlice = require( '@stdlib/slice/base/normalize-multi-slice' );

var s1 = new MultiSlice( null, S(), -1 );
var s2 = normalizeMultiSlice( s1, [ 5, 10, 7 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );

s1 = new MultiSlice( null );
s2 = normalizeMultiSlice( s1, [ 5 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );

s1 = new MultiSlice( S( -1, null, -1 ), 3 );
s2 = normalizeMultiSlice( s1, [ 5, 5 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );

s1 = new MultiSlice( 2, S( -10, -2, 2 ), 3, null );
s2 = normalizeMultiSlice( s1, [ 10, 10, 10, 10 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );

s1 = new MultiSlice( S( 1, 20, 2 ), S( null, null, -1 ) );
s2 = normalizeMultiSlice( s1, [ 10, 10 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/slice/base/normalize-slice`][@stdlib/slice/base/normalize-slice]</span><span class="delimiter">: </span><span class="description">normalize a Slice object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice/tree/main/multi

<!-- <related-links> -->

[@stdlib/slice/base/normalize-slice]: https://github.com/stdlib-js/slice/tree/main/base/normalize-slice

<!-- </related-links> -->

</section>

<!-- /.links -->
