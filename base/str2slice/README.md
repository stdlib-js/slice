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

# str2slice

> Parse a string-serialized [`Slice`][@stdlib/slice/ctor] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var str2slice = require( '@stdlib/slice/base/str2slice' );
```

<a name="main"></a>

#### str2slice( str )

Parses a string-serialized [`Slice`][@stdlib/slice/ctor] object.

```javascript
var s = str2slice( 'Slice(0,5,1)' );
// returns <Slice>

var v = s.start;
// returns 0

v = s.stop;
// returns 5

v = s.step;
// returns 1
```

The function returns `null` if provided an invalid string.

```javascript
var s = str2slice( 'Slice(foo,bar)' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The string serialization format must match that of a [`Slice`][@stdlib/slice/ctor] object.

    ```javascript
    var Slice = require( '@stdlib/slice/ctor' );

    var s = new Slice( 2, 10, 1 );
    // returns <Slice>

    var str = s.toString();
    // returns 'Slice(2,10,1)'
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var str2slice = require( '@stdlib/slice/base/str2slice' );

var s = str2slice( 'Slice(null,null,null)' );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: null. stop: null. step: null.'

s = str2slice( 'Slice(2,10,2)' );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: 10. step: 2.'

s = str2slice( 'Slice(10,null,-2)' );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 10. stop: null. step: -2.'

s = str2slice( 'Slice(null,null,2)' );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: null. stop: null. step: 2.'

s = str2slice( 'Slice(foo,bar)' );
console.log( s );
// => null
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

-   <span class="package-name">[`@stdlib/slice/base/str2multislice`][@stdlib/slice/base/str2multislice]</span><span class="delimiter">: </span><span class="description">parse a string-serialized MultiSlice object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice/tree/main/ctor

<!-- <related-links> -->

[@stdlib/slice/base/str2multislice]: https://github.com/stdlib-js/slice/tree/main/base/str2multislice

<!-- </related-links> -->

</section>

<!-- /.links -->
