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

# sliceShape

> Compute the shape of a [normalized multi-slice][@stdlib/slice/base/normalize-multi-slice].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sliceShape = require( '@stdlib/slice/base/shape' );
```

<a name="main"></a>

#### sliceShape( slice )

Returns the shape of a [normalized multi-slice][@stdlib/slice/base/normalize-multi-slice].

<!-- eslint-disable new-cap -->

```javascript
var S = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );
var normalizeMultiSlice = require( '@stdlib/slice/base/normalize-multi-slice' );

var s = new MultiSlice( S( -4, null, -1 ), S( 2, 10, 1 ) );
// returns <MultiSlice>

s = normalizeMultiSlice( s, [ 10, 10 ], false );
// returns <MultiSlice>

var sh = sliceShape( s );
// returns [ 7, 8 ]
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
var normalizeMultiSlice = require( '@stdlib/slice/base/normalize-multi-slice' );
var sliceShape = require( '@stdlib/slice/base/shape' );

var s1 = new MultiSlice( S( 3, null, -1 ), S( 3, 7, 1 ) );
var s2 = normalizeMultiSlice( s1, [ 10, 10 ], false );
var sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 4, 4 ]'

s1 = new MultiSlice( null, S( -1, -8, -2 ) );
s2 = normalizeMultiSlice( s1, [ 11, 12 ], false );
sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 11, 4 ]'

s1 = new MultiSlice( S( null, null, 1 ), null );
s2 = normalizeMultiSlice( s1, [ 11, 12 ], false );
sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 11, 12 ]'

s1 = new MultiSlice( S( 5, 5, 1 ), null );
s2 = normalizeMultiSlice( s1, [ 11, 12 ], false );
sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 0, 12 ]'

s1 = new MultiSlice( S( 5, 5, 1 ), S( 3, 3, 1 ) );
s2 = normalizeMultiSlice( s1, [ 10, 10 ], false );
sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 0, 0 ]'
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

-   <span class="package-name">[`@stdlib/slice/base/length`][@stdlib/slice/base/length]</span><span class="delimiter">: </span><span class="description">compute the number of elements in a normalized slice.</span>
-   <span class="package-name">[`@stdlib/slice/base/nonreduced-dimensions`][@stdlib/slice/base/nonreduced-dimensions]</span><span class="delimiter">: </span><span class="description">return a list of non-reduced dimensions in an un-normalized multi-slice.</span>
-   <span class="package-name">[`@stdlib/slice/base/reduced-dimensions`][@stdlib/slice/base/reduced-dimensions]</span><span class="delimiter">: </span><span class="description">return a list of reduced dimensions in an un-normalized multi-slice.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/base/normalize-multi-slice]: https://github.com/stdlib-js/slice/tree/main/base/normalize-multi-slice

<!-- <related-links> -->

[@stdlib/slice/base/length]: https://github.com/stdlib-js/slice/tree/main/base/length

[@stdlib/slice/base/nonreduced-dimensions]: https://github.com/stdlib-js/slice/tree/main/base/nonreduced-dimensions

[@stdlib/slice/base/reduced-dimensions]: https://github.com/stdlib-js/slice/tree/main/base/reduced-dimensions

<!-- </related-links> -->

</section>

<!-- /.links -->
