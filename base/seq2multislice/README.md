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

# seq2multislice

> Convert a multidimensional subsequence string to a [`MultiSlice`][@stdlib/slice/multi] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var seq2multislice = require( '@stdlib/slice/base/seq2multislice' );
```

<a name="main"></a>

#### seq2multislice( str, shape, strict )

Converts a multidimensional subsequence string to a [`MultiSlice`][@stdlib/slice/multi] object, where `shape` specifies the maximum allowed slice shape.

```javascript
var s = seq2multislice( ':5', [ 10 ], false );
// returns <MultiSlice>

var s0 = s.data[ 0 ];
// returns <Slice>

var v = s0.start;
// returns 0

v = s0.stop;
// returns 5

v = s0.step;
// returns 1
```

A multidimensional subsequence string is a comma-separated list of single-dimension indexing expressions (i.e., integers and/or [subsequence strings][@stdlib/slice/base/seq2slice]). For example, the following

```text
2
:
2:
:10
2:10
::-1
10:2:-1
:2:
2:10:
2::2
:10:2
:, :, :
1, 2, 3
0:10, 1:20:2, ::-1
...
:, ..., 2
```

are all valid multidimensional subsequence strings. The function returns an error object if provided an invalid subsequence string.

```javascript
var s = seq2multislice( '1:2:3:4', [ 10 ], false );
// returns { 'code': 'ERR_SLICE_INVALID_SUBSEQUENCE' }
```

When `strict` is `true`, the function returns an error object if a subsequence string resolves to a slice exceeding index bounds.

```javascript
var s = seq2multislice( '10:20', [ 10 ], true );
// returns { 'code': 'ERR_SLICE_OUT_OF_BOUNDS' }
```

A returned error object may have one of the following error codes:

-   **ERR_SLICE_INVALID_SUBSEQUENCE**: a subsequence string is invalid.
-   **ERR_SLICE_INVALID_INCREMENT**: a subsequence string must have a non-zero increment.
-   **ERR_SLICE_OUT_OF_BOUNDS**: a subsequence string resolves to a slice exceeding index bounds.
-   **ERR_SLICE_TOO_MANY_DIMENSIONS**: a subsequence string has more dimensions than the provided shape.
-   **ERR_SLICE_INSUFFICIENT_DIMENSIONS**: a subsequence string has too few dimensions.
-   **ERR_SLICE_INVALID_ELLIPSIS**: a subsequence string must only contain at most one ellipsis.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Providing a single nonnegative integer `i` as a single-dimension index indexes the same elements as the subsequence `i:i+1`.
-   Providing a single negative integer `i` as a single-dimension index indexes the same elements as the subsequence `n+i:n+i+i`, where `n` is the dimension size.
-   While integers index the same elements as equivalent subsequences, providing an integer as a single-dimension index indicates to reduce the number of dimensions by one (e.g., if the provided shape corresponds to an array having rank `2`, then `rank(A)-1 == rank(A['0,:'])`). In contrast, providing a subsequence indicates to retain a respective dimension (e.g., if the provided shape corresponds to an array having rank `2`, then `rank(A) == rank(A[':,:'])`).
-   A multidimensional subsequence string can only contain **one** ellipsis ('...') operator. An ellipsis indicates to apply `:` to each dimension necessary to index all dimensions (e.g., if `A` has rank `4`, `A['1:, ..., 2:5'] == A['1:, :, :, 2:5']`).
-   Except in the case of providing a single ellipsis, the number of single-dimension indexing expressions must equal the number of dimensions in the input shape.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var seq2multislice = require( '@stdlib/slice/base/seq2multislice' );

var s = seq2multislice( ':,:,:', [ 10, 10, 10 ], false );
var d = s.data;
// returns [ <Slice>, <Slice>, <Slice> ]

s = seq2multislice( '3,2:10,:', [ 10, 10, 10 ], false );
d = s.data;
// returns [ 3, <Slice>, <Slice> ]

s = seq2multislice( '2,2:,-5', [ 10, 10, 10 ], false );
d = s.data;
// returns [ 2, <Slice>, -5 ]

s = seq2multislice( '::-2,-1,...,:', [ 10, 10, 10, 10, 10, 10 ], false );
d = s.data;
// returns [ <Slice>, -1, <Slice>, <Slice>, <Slice>, <Slice> ]

s = seq2multislice( 'foo,bar', [ 10, 10 ], false );
// returns { 'code': 'ERR_SLICE_INVALID_SUBSEQUENCE' }
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
-   <span class="package-name">[`@stdlib/slice/base/sargs2multislice`][@stdlib/slice/base/sargs2multislice]</span><span class="delimiter">: </span><span class="description">create a MultiSlice object from a comma-separated list of string-serialized MultiSlice constructor arguments.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice/tree/main/multi

[@stdlib/slice/base/seq2slice]: https://github.com/stdlib-js/slice/tree/main/base/seq2slice

<!-- <related-links> -->

[@stdlib/slice/base/sargs2multislice]: https://github.com/stdlib-js/slice/tree/main/base/sargs2multislice

<!-- </related-links> -->

</section>

<!-- /.links -->
