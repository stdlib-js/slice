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

# sliceLength

> Compute the number of elements in a [normalized slice][@stdlib/slice/base/normalize-slice].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sliceLength = require( '@stdlib/slice/base/length' );
```

<a name="main"></a>

#### sliceLength( slice )

Returns the number of elements in a [normalized slice][@stdlib/slice/base/normalize-slice].

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );

var s = normalizeSlice( new Slice( -3, null, -1 ), 10, false );
// returns <Slice>

var len = sliceLength( s );
// returns 8
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

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
var incrspace = require( '@stdlib/array/base/incrspace' );
var sliceLength = require( '@stdlib/slice/base/length' );

var s1 = new Slice( 2, null, -1 );
var s2 = normalizeSlice( s1, 10, false );
var v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 2, 1, 0 ]'

s1 = new Slice( null, null, -3 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 9, 6, 3, 0 ]'

s1 = new Slice( null, 8, 3 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 0, 3, 6 ]'

s1 = new Slice( null, 8, null );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 0, 1, 2, 3, 4, 5, 6, 7 ]'

s1 = new Slice( -4, null, -2 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 6, 4, 2, 0 ]'

s1 = new Slice( null, 8, 3 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 0, 3, 6 ]'

s1 = new Slice( 8, 2, -2 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 8, 6, 4 ]'

s1 = new Slice( 3, 8, 2 );
s2 = normalizeSlice( s1, 10, false );
v = sliceLength( s2 );
console.log( '%s => %s => %d', s1.toString(), s2.toString(), v );
console.log( '[ %s ]', incrspace( s2.start, s2.stop || -1, s2.step ).join( ', ' ) );
// => '[ 3, 5, 7 ]'
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

-   <span class="package-name">[`@stdlib/slice/base/nonreduced-dimensions`][@stdlib/slice/base/nonreduced-dimensions]</span><span class="delimiter">: </span><span class="description">return a list of non-reduced dimensions in an un-normalized multi-slice.</span>
-   <span class="package-name">[`@stdlib/slice/base/reduced-dimensions`][@stdlib/slice/base/reduced-dimensions]</span><span class="delimiter">: </span><span class="description">return a list of reduced dimensions in an un-normalized multi-slice.</span>
-   <span class="package-name">[`@stdlib/slice/base/shape`][@stdlib/slice/base/shape]</span><span class="delimiter">: </span><span class="description">compute the shape of a normalized multi-slice.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/base/normalize-slice]: https://github.com/stdlib-js/slice/tree/main/base/normalize-slice

<!-- <related-links> -->

[@stdlib/slice/base/nonreduced-dimensions]: https://github.com/stdlib-js/slice/tree/main/base/nonreduced-dimensions

[@stdlib/slice/base/reduced-dimensions]: https://github.com/stdlib-js/slice/tree/main/base/reduced-dimensions

[@stdlib/slice/base/shape]: https://github.com/stdlib-js/slice/tree/main/base/shape

<!-- </related-links> -->

</section>

<!-- /.links -->
