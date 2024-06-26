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

# seq2slice

> Convert a subsequence string to a [`Slice`][@stdlib/slice/ctor] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var seq2slice = require( '@stdlib/slice/base/seq2slice' );
```

<a name="main"></a>

#### seq2slice( str, len, strict )

Converts a subsequence string to a [`Slice`][@stdlib/slice/ctor] object, where `len` specifies the maximum number of elements allowed in the slice.

```javascript
var s = seq2slice( ':5', 10, false );
// returns <Slice>

var v = s.start;
// returns 0

v = s.stop;
// returns 5

v = s.step;
// returns 1
```

A subsequence string has the following format:

```text
<start>:<stop>:<increment>
```

where

-   If an `increment` is not specified, the default increment is `1`. An increment of zero is **not** allowed.
-   The `start` index is **inclusive**.
-   The `stop` index is **exclusive**.
-   Both `start` and `stop` indices are _optional_. If not provided, `start` and `stop` default to index extremes. Which extremes correspond to which index depends on whether the `increment` is positive or negative. 
-   Both `start` and `stop` can be negative; in which case, the corresponding index is resolved by subtracting the respective value from the provided length `len`.
-   Both `start` and `stop` can use the `end` keyword (e.g., `end-2::2`, `end-3:`, etc), which supports basic subtraction and division.
-   The `end` keyword resolves to the provided length `len`. Thus, `:-1` is equivalent to `:end-1`, `:-2` is equivalent to `:end-2`, and so on and so forth. The exception is when performing a division operation when the `increment` is less than zero; in which case, `end` is equal to `len-1` in order to preserve user expectations when `end/d` equals a whole number and slicing from right-to-left. The result from a division operation is **rounded down** to the nearest integer value.

```javascript
var s = seq2slice( 'end:2:-1', 10, false );
// returns <Slice>

var v = s.start;
// returns 9

v = s.stop;
// returns 2

v = s.step;
// returns -1

s = seq2slice( 'end-2:2:-1', 10, false );
// returns <Slice>

v = s.start;
// returns 8

v = s.stop;
// returns 2

v = s.step;
// returns -1

s = seq2slice( 'end/2:2:-1', 10, false );
// returns <Slice>

v = s.start;
// returns 4

v = s.stop;
// returns 2

v = s.step;
// returns -1
```

The function returns an error object if provided an invalid subsequence string.

```javascript
var s = seq2slice( '1:2:3:4', 10, false );
// returns { 'code': 'ERR_SLICE_INVALID_SUBSEQUENCE' }
```

When `strict` is `true`, the function returns an error object if a subsequence string resolves to a slice exceeding index bounds.

```javascript
var s = seq2slice( '10:20', 10, true );
// returns { 'code': 'ERR_SLICE_OUT_OF_BOUNDS' }
```

A returned error object may have one of the following error codes:

-   **ERR_SLICE_INVALID_SUBSEQUENCE**: a subsequence string is invalid.
-   **ERR_SLICE_INVALID_INCREMENT**: a subsequence string must have a non-zero increment.
-   **ERR_SLICE_OUT_OF_BOUNDS**: a subsequence string resolves to a slice exceeding index bounds.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When `len` is zero, the function always returns a Slice object equivalent to `0:0:<increment>`.
-   When `strict` is `false`, the resolved slice start is clamped to the slice index bounds (i.e., `[0, len)`).
-   When `strict` is `false`, the resolved slice end is upper bound clamped to `len` (i.e., one greater than the last possible index).
-   When the increment is negative, the resolved slice end value may be `null`, thus indicating that a non-empty slice should include the first index.
-   The function ensures that results satisfy the convention that `:n` combined with `n:` is equivalent to `:` (i.e., selecting all elements). This convention matches Python slice semantics, but diverges from the MATLAB convention where `:n` and `n:` overlap by one element. 
-   Unlike MATLAB, but like Python, the subsequence string is upper-bound exclusive. For example, in Python, `0:2` corresponds to the sequence `{0,1}`. In MATLAB, `1:3` corresponds to `{1,2,3}`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var seq2slice = require( '@stdlib/slice/base/seq2slice' );

var s = seq2slice( ':', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 5. step: 1.'

s = seq2slice( '2:', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: 5. step: 1.'

s = seq2slice( ':3', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 3. step: 1.'

s = seq2slice( '2:4', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: 4. step: 1.'

s = seq2slice( '1:4:2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 1. stop: 4. step: 2.'

s = seq2slice( '2::2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: 5. step: 2.'

s = seq2slice( ':-2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 3. step: 1.'

s = seq2slice( ':-1:2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 4. step: 2.'

s = seq2slice( '-4:-1:2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 1. stop: 4. step: 2.'

s = seq2slice( '-5:-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 4. step: 1.'

s = seq2slice( '::-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 4. stop: null. step: -1.'

s = seq2slice( ':0:-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 4. stop: 0. step: -1.'

s = seq2slice( '3:0:-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 3. stop: 0. step: -1.'

s = seq2slice( '-1:-4:-2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 4. stop: 1. step: -2.'

s = seq2slice( ':end', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 5. step: 1.'

s = seq2slice( ':end-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 4. step: 1.'

s = seq2slice( ':end/2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 2. step: 1.'

s = seq2slice( 'end/2::-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: null. step: -1.'

s = seq2slice( 'end-2::-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 3. stop: null. step: -1.'

s = seq2slice( 'end/2:', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: 5. step: 1.'
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

-   <span class="package-name">[`@stdlib/slice/base/seq2multislice`][@stdlib/slice/base/seq2multislice]</span><span class="delimiter">: </span><span class="description">convert a multidimensional subsequence string to a MultiSlice object.</span>
-   <span class="package-name">[`@stdlib/slice/base/slice2seq`][@stdlib/slice/base/slice2seq]</span><span class="delimiter">: </span><span class="description">convert a Slice object to a subsequence string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice/tree/main/ctor

<!-- <related-links> -->

[@stdlib/slice/base/seq2multislice]: https://github.com/stdlib-js/slice/tree/main/base/seq2multislice

[@stdlib/slice/base/slice2seq]: https://github.com/stdlib-js/slice/tree/main/base/slice2seq

<!-- </related-links> -->

</section>

<!-- /.links -->
