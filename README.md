# get-plane-normal

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Gets a plane's normal from 3 points on that plane.

```js
var point1 = [0, 1, 0], 
    point2 = [1, 1, 0.5], 
    point3 = [0, 1, -2]

var norm = normal([], point1, point2, point3)
console.log(norm) // [0, 1, 0]
```

## Usage

[![NPM](https://nodei.co/npm/get-plane-normal.png)](https://www.npmjs.com/package/get-plane-normal)

#### `out = normal(out, point1, point2, point3)`

With three points on the same plane, determines the unit normal and stores it in `out` [x, y, z]. 

Returns `out`.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/get-plane-normal/blob/master/LICENSE.md) for details.
