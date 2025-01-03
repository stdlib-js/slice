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

# normalizeSlice

> Normalize a [`Slice`][@stdlib/slice/ctor] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
```

<a name="main"></a>

#### normalizeSlice( slice, len, strict )

Normalizes a [`Slice`][@stdlib/slice/ctor] object, where `len` specifies the maximum number of elements allowed in the slice.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var s = normalizeSlice( new Slice( -1, null, -1 ), 10, false );
// returns <Slice>

var v = s.start;
// returns 9

v = s.stop;
// returns null

v = s.step;
// returns -1
```

When `strict` is `true`, the function returns an error object if an input slice exceeds index bounds.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var s = normalizeSlice( new Slice( -20, 20, 1 ), 10, true );
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
var Slice = require( '@stdlib/slice/ctor' );
var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );

var s = normalizeSlice( new Slice(), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 5. step: 1.'

s = normalizeSlice( new Slice( 1, 4, 2 ), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 1. stop: 4. step: 2.'

s = normalizeSlice( new Slice( -1, null, -1 ), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 4. stop: null. step: -1.'

s = normalizeSlice( new Slice( -10, -2, 2 ), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 3. step: 2.'

s = normalizeSlice( new Slice( 1, 20, 2 ), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 1. stop: 5. step: 2.'
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

-   <span class="package-name">[`@stdlib/slice/base/normalize-multi-slice`][@stdlib/slice/base/normalize-multi-slice]</span><span class="delimiter">: </span><span class="description">normalize a MultiSlice object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice/tree/main/ctor

<!-- <related-links> -->

[@stdlib/slice/base/normalize-multi-slice]: https://github.com/stdlib-js/slice/tree/main/base/normalize-multi-slice

<!-- </related-links> -->

</section>

<!-- /.links -->
