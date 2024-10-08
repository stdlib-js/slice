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

# args2multislice

> Create a [`MultiSlice`][@stdlib/slice/multi] object from a list of [`MultiSlice`][@stdlib/slice/multi] constructor arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var args2multislice = require( '@stdlib/slice/base/args2multislice' );
```

<a name="main"></a>

#### args2multislice( args )

Creates a [`MultiSlice`][@stdlib/slice/multi] object from a list of [`MultiSlice`][@stdlib/slice/multi] constructor arguments.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var s = args2multislice( [ 0, new Slice( 2, 10, 1 ), 1 ] );
// returns <MultiSlice>

var d = s.data;
// returns [ 0, <Slice>, 1 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function is useful as a more performant drop-in replacement for the common pattern of using `MultiSlice.apply( null, args )` to create a [`MultiSlice`][@stdlib/slice/multi] from a list of [`MultiSlice`][@stdlib/slice/multi] arguments.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Slice = require( '@stdlib/slice/ctor' );
var args2multislice = require( '@stdlib/slice/base/args2multislice' );

var s = args2multislice( [ null, null, null ] );
// returns <MultiSlice>

var d = s.data;
// returns [ null, null, null ]

s = args2multislice( [ 10, new Slice( 2, 10, 1 ), null ] );
// returns <MultiSlice>

d = s.data;
// returns [ 10, <Slice>, null ]

s = args2multislice( [ 2, new Slice( 2, 10, 1 ), -5 ] );
// returns <MultiSlice>

d = s.data;
// returns [ 2, <Slice>, -5 ]
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
