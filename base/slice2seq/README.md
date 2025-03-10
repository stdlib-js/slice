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

# slice2seq

> Convert a [`Slice`][@stdlib/slice/ctor] object to a subsequence string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var slice2seq = require( '@stdlib/slice/base/slice2seq' );
```

<a name="main"></a>

#### slice2seq( str )

Converts a [`Slice`][@stdlib/slice/ctor] object to a subsequence string.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var str = slice2seq( new Slice( 0, 5, 1 ) );
// returns '0:5:1'
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
var slice2seq = require( '@stdlib/slice/base/slice2seq' );

var str = slice2seq( new Slice( null, null, null ) );
// returns ':'

str = slice2seq( new Slice() );
// returns ':'

str = slice2seq( new Slice( null ) );
// returns ':'

str = slice2seq( new Slice( 10 ) );
// returns ':10'

str = slice2seq( new Slice( -1 ) );
// returns ':-1'

str = slice2seq( new Slice( 2, 10 ) );
// returns '2:10'

str = slice2seq( new Slice( -2, 10 ) );
// returns '-2:10'

str = slice2seq( new Slice( -2, -10 ) );
// returns '-2:-10'

str = slice2seq( new Slice( 2, null ) );
// returns '2:'

str = slice2seq( new Slice( null, 10 ) );
// returns ':10'

str = slice2seq( new Slice( 2, 10, 2 ) );
// returns '2:10:2'

str = slice2seq( new Slice( -1, null, -1 ) );
// returns '-1::-1'

str = slice2seq( new Slice( -1, -5, -1 ) );
// returns '-1:-5:-1'

str = slice2seq( new Slice( -1, 10, -1 ) );
// returns '-1:10:-1'

str = slice2seq( new Slice( 1, -1, 2 ) );
// returns '1:-1:2'

str = slice2seq( new Slice( null, null, -1 ) );
// returns '::-1'
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice/tree/main/ctor

<!-- <related-links> -->

[@stdlib/slice/base/seq2slice]: https://github.com/stdlib-js/slice/tree/main/base/seq2slice

<!-- </related-links> -->

</section>

<!-- /.links -->
