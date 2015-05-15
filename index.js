var normalize = require('gl-vec3/normalize')
var sub = require('gl-vec3/subtract')
var cross = require('gl-vec3/cross')
var tmp = [0, 0, 0]

module.exports = planeNormal

function planeNormal (out, point1, point2, point3) {
  sub(out, point1, point2)
  sub(tmp, point2, point3)
  cross(out, out, tmp)
  return normalize(out, out)
}