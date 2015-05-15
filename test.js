var getPlaneNormal = require('./')
var test = require('tape')
var copy = require('deepcopy')

test("gets a plane's normal from 3 points", function (t) {
  var out = []
  var n = getPlaneNormal(out, [0, 1, 0], [1, 1, 0.5], [0, 1, -2])
  t.equal(n, out, 'returns out param')
  t.deepEqual(n, [0, 1, 0])

  n = getPlaneNormal(out, [-4, 0, 0], [-4, 1, 0.5], [-4, 1, -2])
  t.deepEqual(n, [-1, 0, 0])

  var points = [
    [0,14,5],
    [5,1,2],
    [1,1,-5]    
  ]
  var points2 = copy(points)

  n = getPlaneNormal(out, points[0], points[1], points[2])
  t.deepEqual(points, points2, 'does not mutate input points')
  t.end()
})
