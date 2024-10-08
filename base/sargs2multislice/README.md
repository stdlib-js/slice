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

# sargs2multislice

> Create a [`MultiSlice`][@stdlib/slice/multi] object from a comma-separated list of string-serialized [`MultiSlice`][@stdlib/slice/multi] constructor arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sargs2multislice = require( '@stdlib/slice/base/sargs2multislice' );
```

<a name="main"></a>

#### sargs2multislice( str )

Creates a [`MultiSlice`][@stdlib/slice/multi] object from a comma-separated list of string-serialized [`MultiSlice`][@stdlib/slice/multi] constructor arguments.

```javascript
var s = sargs2multislice( '0,Slice(2,10,1),1' );
// returns <MultiSlice>

var d = s.data;
// returns [ 0, <Slice>, 1 ]
```

The function returns `null` if provided an invalid string.

```javascript
var s = sargs2multislice( 'foo,bar' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function is useful from wanting to create a [`MultiSlice`][@stdlib/slice/multi] object from an array of constructor arguments which has been serialized to a string (e.g., when working with [`Proxy`][@stdlib/proxy/ctor] objects supporting slicing].

    ```javascript
    var Slice = require( '@stdlib/slice/ctor' );

    var args = [ 0, new Slice( 2, 10, 1 ), 1 ];

    // ...

    var sargs = args.toString();
    // returns '0,Slice(2,10,1),1'

    // ...

    var s = sargs2multislice( sargs );
    // returns <MultiSlice>

    var d = s.data;
    // returns [ 0, <Slice>, 1 ]
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sargs2multislice = require( '@stdlib/slice/base/sargs2multislice' );

var s = sargs2multislice( 'null,null,null' );
var d = s.data;
// returns [ null, null, null ]

s = sargs2multislice( '10,Slice(2,10,1),null' );
d = s.data;
// returns [ 10, <Slice>, null ]

s = sargs2multislice( '2,Slice(2,10,1),-5' );
d = s.data;
// returns [ 2, <Slice>, -5 ]

s = sargs2multislice( 'foo,bar' );
// returns null
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

-   <span class="package-name">[`@stdlib/slice/base/args2multislice`][@stdlib/slice/base/args2multislice]</span><span class="delimiter">: </span><span class="description">create a MultiSlice object from a list of MultiSlice constructor arguments.</span>
-   <span class="package-name">[`@stdlib/slice/base/seq2multislice`][@stdlib/slice/base/seq2multislice]</span><span class="delimiter">: </span><span class="description">convert a multidimensional subsequence string to a MultiSlice object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice/tree/main/multi

[@stdlib/proxy/ctor]: https://github.com/stdlib-js/proxy-ctor

<!-- <related-links> -->

[@stdlib/slice/base/args2multislice]: https://github.com/stdlib-js/slice/tree/main/base/args2multislice

[@stdlib/slice/base/seq2multislice]: https://github.com/stdlib-js/slice/tree/main/base/seq2multislice

<!-- </related-links> -->

</section>

<!-- /.links -->
