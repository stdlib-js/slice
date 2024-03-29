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

# MultiSlice

> Multi-slice constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var MultiSlice = require( '@stdlib/slice/multi' );
```

<a name="main"></a>

#### MultiSlice( ...slice )

Returns a `MultiSlice` instance.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var s = new Slice( 0, 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>
```

The constructor accepts the following arguments:

-   **slice**: a single-dimensional slice. May be either a [`Slice`][@stdlib/slice/ctor], `null`, `undefined`, or an integer.

* * *

### Properties

<a name="static-prop-name"></a>

#### MultiSlice.name

String value of the `MultiSlice` constructor name.

```javascript
var str = MultiSlice.name;
// returns 'MultiSlice'
```

<a name="prop-ndims"></a>

#### MultiSlice.prototype.ndims

**Read-only** property returning the number of slice dimensions.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var s = new Slice( 0, 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>

var ndims = ms.ndims;
// returns 3
```

<a name="prop-data"></a>

#### MultiSlice.prototype.data

**Read-only** property returning the slice data.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var s = new Slice( 0, 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>

var data = ms.data;
// returns [ 2, <Slice>, null ]
```

* * *

### Methods

<a name="method-to-string"></a>

#### MultiSlice.prototype.toString()

Serializes a `MultiSlice` as a string.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var s = new Slice( 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>

var str = ms.toString();
// returns 'MultiSlice(2,Slice(null,10,null),null)'
```

<a name="method-to-json"></a>

#### MultiSlice.prototype.toJSON()

Serializes a `MultiSlice` as a [JSON][json] object.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var s = new Slice( 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>

var o = ms.toJSON();
// returns { 'type': 'MultiSlice', 'data': [ 2, { 'type': 'Slice', 'data': [ null, 10, null ] }, null ] }
```

`JSON.stringify()` implicitly calls this method when stringifying a `MultiSlice` instance.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   Slice arguments may be either integers, `null`, or `undefined`, where a non-integer value indicates a slice parameter which should be determined based on the slice context (e.g., when used to index into an [`ndarray`][@stdlib/ndarray/ctor]).
-   Multi-slice instances have no explicit functionality; however, they are used by [`ndarray`][@stdlib/ndarray] and other packages for creating views into multi-dimensional data structures.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```javascript
var S = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );

// Alias `undefined` for more concise expressions:
var _ = void 0;

// Create a 6-dimensional slice:
var s = new MultiSlice( S( 9, -10, -1 ), S( 2, _, 2 ), 2, S( 5, _, 2 ), 3, _ );
// returns <MultiSlice>

// Serialize the slice to a string:
var str = s.toString();
console.log( str );
// => 'MultiSlice(Slice(9,-10,-1),Slice(2,null,2),2,Slice(5,null,2),3,null)'

// Serialize the slice to JSON:
var o = s.toJSON();
console.log( JSON.stringify( o ) );
// => '{"type":"MultiSlice","data":[{"type":"Slice","data":[9,-10,-1]},{"type":"Slice","data":[2,null,2]},2,{"type":"Slice","data":[5,null,2]},3,null]}'
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

-   <span class="package-name">[`@stdlib/ndarray/ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/slice/ctor`][@stdlib/slice/ctor]</span><span class="delimiter">: </span><span class="description">slice constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

[@stdlib/ndarray]: https://github.com/stdlib-js/ndarray

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice/tree/main/ctor

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
