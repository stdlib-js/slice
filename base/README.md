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

# Base

> Base slice namespace.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/slice/base' );
```

#### ns

Base slice namespace.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`args2multislice( args )`][@stdlib/slice/base/args2multislice]</span><span class="delimiter">: </span><span class="description">create a `MultiSlice` object from a list of `MultiSlice` constructor arguments.</span>
-   <span class="signature">[`int2slice( value, max, strict )`][@stdlib/slice/base/int2slice]</span><span class="delimiter">: </span><span class="description">convert an integer to a `Slice` object.</span>
-   <span class="signature">[`sliceLength( slice )`][@stdlib/slice/base/length]</span><span class="delimiter">: </span><span class="description">compute the number of elements in a normalized slice.</span>
-   <span class="signature">[`nonreducedDimensions( slice )`][@stdlib/slice/base/nonreduced-dimensions]</span><span class="delimiter">: </span><span class="description">return a list of non-reduced dimensions in an un-normalized `MultiSlice` object.</span>
-   <span class="signature">[`normalizeMultiSlice( slice, shape, strict )`][@stdlib/slice/base/normalize-multi-slice]</span><span class="delimiter">: </span><span class="description">normalize a `MultiSlice` object.</span>
-   <span class="signature">[`normalizeSlice( slice, len, strict )`][@stdlib/slice/base/normalize-slice]</span><span class="delimiter">: </span><span class="description">normalize a `Slice` object.</span>
-   <span class="signature">[`reducedDimensions( slice )`][@stdlib/slice/base/reduced-dimensions]</span><span class="delimiter">: </span><span class="description">return a list of reduced dimensions in an un-normalized `MultiSlice` object.</span>
-   <span class="signature">[`sargs2multislice( str )`][@stdlib/slice/base/sargs2multislice]</span><span class="delimiter">: </span><span class="description">create a `MultiSlice` object from a comma-separated list of string-serialized `MultiSlice` constructor arguments.</span>
-   <span class="signature">[`seq2multislice( str, shape, strict )`][@stdlib/slice/base/seq2multislice]</span><span class="delimiter">: </span><span class="description">convert a multidimensional subsequence string to a `MultiSlice` object.</span>
-   <span class="signature">[`seq2slice( str, len, strict )`][@stdlib/slice/base/seq2slice]</span><span class="delimiter">: </span><span class="description">convert a subsequence string to a `Slice` object.</span>
-   <span class="signature">[`sliceShape( slice )`][@stdlib/slice/base/shape]</span><span class="delimiter">: </span><span class="description">compute the shape of a normalized multi-slice.</span>
-   <span class="signature">[`slice2seq( str )`][@stdlib/slice/base/slice2seq]</span><span class="delimiter">: </span><span class="description">convert a `Slice` object to a subsequence string.</span>
-   <span class="signature">[`str2multislice( str )`][@stdlib/slice/base/str2multislice]</span><span class="delimiter">: </span><span class="description">parse a string-serialized `MultiSlice` object.</span>
-   <span class="signature">[`str2slice( str )`][@stdlib/slice/base/str2slice]</span><span class="delimiter">: </span><span class="description">parse a string-serialized `Slice` object.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/slice/base' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/slice/base/args2multislice]: https://github.com/stdlib-js/slice/tree/main/base/args2multislice

[@stdlib/slice/base/int2slice]: https://github.com/stdlib-js/slice/tree/main/base/int2slice

[@stdlib/slice/base/length]: https://github.com/stdlib-js/slice/tree/main/base/length

[@stdlib/slice/base/nonreduced-dimensions]: https://github.com/stdlib-js/slice/tree/main/base/nonreduced-dimensions

[@stdlib/slice/base/normalize-multi-slice]: https://github.com/stdlib-js/slice/tree/main/base/normalize-multi-slice

[@stdlib/slice/base/normalize-slice]: https://github.com/stdlib-js/slice/tree/main/base/normalize-slice

[@stdlib/slice/base/reduced-dimensions]: https://github.com/stdlib-js/slice/tree/main/base/reduced-dimensions

[@stdlib/slice/base/sargs2multislice]: https://github.com/stdlib-js/slice/tree/main/base/sargs2multislice

[@stdlib/slice/base/seq2multislice]: https://github.com/stdlib-js/slice/tree/main/base/seq2multislice

[@stdlib/slice/base/seq2slice]: https://github.com/stdlib-js/slice/tree/main/base/seq2slice

[@stdlib/slice/base/shape]: https://github.com/stdlib-js/slice/tree/main/base/shape

[@stdlib/slice/base/slice2seq]: https://github.com/stdlib-js/slice/tree/main/base/slice2seq

[@stdlib/slice/base/str2multislice]: https://github.com/stdlib-js/slice/tree/main/base/str2multislice

[@stdlib/slice/base/str2slice]: https://github.com/stdlib-js/slice/tree/main/base/str2slice

<!-- </toc-links> -->

</section>

<!-- /.links -->
