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

# reducedDimensions

> Return a list of reduced dimensions in an un-normalized [`MultiSlice`][@stdlib/slice/multi] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

In a multi-axis indexing expression (e.g., '1,:,2,:,0:10:1'), a non-reduced dimension corresponds to a dimension which is retained in the slice result. Only integer indexing expressions (e.g., only the first and third dimensions in '1,:,2,:,0:10:1') result in dimension reduction; slices always retain respective dimensions, even if a slice is empty or only selects a single element.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reducedDimensions = require( '@stdlib/slice/base/reduced-dimensions' );
```

<a name="main"></a>

#### reducedDimensions( slice )

Returns a list of reduced dimensions in an un-normalized [`MultiSlice`][@stdlib/slice/multi] object.

```javascript
var MultiSlice = require( '@stdlib/slice/multi' );
var Slice = require( '@stdlib/slice/ctor' );

var s = new MultiSlice( 1, null, 2, void 0, new Slice( 0, 10, 1 ) );
// returns <MultiSlice>

var indices = reducedDimensions( s );
// returns [ 0, 2 ]
```

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
var reducedDimensions = require( '@stdlib/slice/base/reduced-dimensions' );

var s = new MultiSlice( null, S(), -1 );
var out = reducedDimensions( s );
console.log( '%s => [%s]', s.toString(), out.join( ',' ) );

s = new MultiSlice( null );
out = reducedDimensions( s );
console.log( '%s => [%s]', s.toString(), out.join( ',' ) );

s = new MultiSlice( S( -1, null, -1 ), 3 );
out = reducedDimensions( s );
console.log( '%s => [%s]', s.toString(), out.join( ',' ) );

s = new MultiSlice( 2, S( -10, -2, 2 ), 3, null );
out = reducedDimensions( s );
console.log( '%s => [%s]', s.toString(), out.join( ',' ) );

s = new MultiSlice( S( 1, 20, 2 ), S( null, null, -1 ) );
out = reducedDimensions( s );
console.log( '%s => [%s]', s.toString(), out.join( ',' ) );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice/tree/main/multi

</section>

<!-- /.links -->
