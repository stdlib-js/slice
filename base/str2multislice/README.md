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

# str2multislice

> Parse a string-serialized [`MultiSlice`][@stdlib/slice/multi] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var str2multislice = require( '@stdlib/slice/base/str2multislice' );
```

<a name="main"></a>

#### str2multislice( str )

Parses a string-serialized [`MultiSlice`][@stdlib/slice/multi] object.

```javascript
var s = str2multislice( 'MultiSlice(0,Slice(2,10,1),1)' );
// returns <MultiSlice>

var d = s.data;
// returns [ 0, <Slice>, 1 ]
```

The function returns `null` if provided an invalid string.

```javascript
var s = str2multislice( 'MultiSlice(foo,bar)' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The string serialization format must match that of a [`MultiSlice`][@stdlib/slice/multi] object.

    ```javascript
    var Slice = require( '@stdlib/slice/ctor' );
    var MultiSlice = require( '@stdlib/slice/multi' );

    var s = new MultiSlice( null, new Slice( 2, 10, 1 ), 10 );
    // returns <MultiSlice>

    var str = s.toString();
    // returns 'MultiSlice(null,Slice(2,10,1),10)'
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var str2multislice = require( '@stdlib/slice/base/str2multislice' );

var s = str2multislice( 'MultiSlice(null,null,null)' );
var d = s.data;
// returns [ null, null, null ]

s = str2multislice( 'MultiSlice(10,Slice(2,10,1),null)' );
d = s.data;
// returns [ 10, <Slice>, null ]

s = str2multislice( 'MultiSlice(2,Slice(2,10,1),-5)' );
d = s.data;
// returns [ 2, <Slice>, -5 ]

s = str2multislice( 'MultiSlice(foo,bar)' );
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

-   <span class="package-name">[`@stdlib/slice/base/str2slice`][@stdlib/slice/base/str2slice]</span><span class="delimiter">: </span><span class="description">parse a string-serialized Slice object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice/tree/main/multi

<!-- <related-links> -->

[@stdlib/slice/base/str2slice]: https://github.com/stdlib-js/slice/tree/main/base/str2slice

<!-- </related-links> -->

</section>

<!-- /.links -->
