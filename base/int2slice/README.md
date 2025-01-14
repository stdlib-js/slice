<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# int2slice

> Convert an integer to a [`Slice`][@stdlib/slice/ctor] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var int2slice = require( '@stdlib/slice/base/int2slice' );
```

<a name="main"></a>

#### int2slice( value, max, strict )

Converts an integer to a [`Slice`][@stdlib/slice/ctor] object, where `max` specifies the index upper bound.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var s = int2slice( -4, 10, false );
// returns <Slice>

var start = s.start;
// returns 6

var stop = s.stop;
// returns 7

var step = s.step;
// returns 1
```

When `strict` is `true`, the function returns an error object if an input value exceeds index bounds.

```javascript
var s = int2slice( 100, 10, true );
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

```javascript
var int2slice = require( '@stdlib/slice/base/int2slice' );

var s = int2slice( -1, 7, false );
console.log( '%s', s.toString() );

s = int2slice( 3, 5, false );
console.log( '%s', s.toString() );

s = int2slice( -3, 5, false );
console.log( '%s', s.toString() );

s = int2slice( 10, 5, false );
console.log( '%s', s.toString() );

s = int2slice( -10, 5, false );
console.log( '%s', s.toString() );
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

-   <span class="package-name">[`@stdlib/slice/base/seq2slice`][@stdlib/slice/base/seq2slice]</span><span class="delimiter">: </span><span class="description">convert a subsequence string to a Slice object.</span>
-   <span class="package-name">[`@stdlib/slice/base/str2slice`][@stdlib/slice/base/str2slice]</span><span class="delimiter">: </span><span class="description">parse a string-serialized Slice object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice/tree/main/ctor

<!-- <related-links> -->

[@stdlib/slice/base/seq2slice]: https://github.com/stdlib-js/slice/tree/main/base/seq2slice

[@stdlib/slice/base/str2slice]: https://github.com/stdlib-js/slice/tree/main/base/str2slice

<!-- </related-links> -->

</section>

<!-- /.links -->
