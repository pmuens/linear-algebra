const assert = require('assert')

const Vector = require('./vector')

// printing
{
  const vector = new Vector([1, 2, 3])

  const res = vector.print()

  assert(res === 'Vector: 1,2,3')
}

// comparison
{
  const vector1 = new Vector([1, 2, 3])
  const vector2 = new Vector([1, 2, 3])
  const vector3 = new Vector([1, -2, 3])

  assert(vector1.equals(vector2))
  assert(!vector1.equals(vector3))
}

// addition
{
  const vector1 = new Vector([1, 2, 3])
  const vector2 = new Vector([2, 3, 4])

  const res = vector1.add(vector2)

  assert(res.equals(new Vector([3, 5, 7])))
}

// subtraction
{
  const vector1 = new Vector([2, 3, 4])
  const vector2 = new Vector([1, 2, 3])

  const res = vector1.subtract(vector2)

  assert(res.equals(new Vector([1, 1, 1])))
}

// scalar multiplication
{
  const vector = new Vector([1, 2, 3])
  const scalar = 3

  const res = vector.multiply(3)

  assert(res.equals(new Vector([3, 6, 9])))
}

// magnitude
{
  const vector = new Vector([1, 1, 1, 2, 3])

  const res = vector.magnitude()
  assert(res === 4)
}

// normalize
{
  const vector = new Vector([-1, 1, 1])

  const res = vector.normalize()

  // round so that testing is reliable
  const rounded = new Vector(
    res.coordinates.map(coordinate => +coordinate.toFixed(3))
  )
  assert(rounded.equals(new Vector([-0.577, 0.577, 0.577])))
}

// dotProduct
{
  const vector1 = new Vector([1, 2, 3])
  const vector2 = new Vector([2, 3, 4])

  const res = vector1.dotProduct(vector2)

  assert(res === 20)
}

// angle
{
  const vector1 = new Vector([1, 2, -1])
  const vector2 = new Vector([3, 1, 0])

  const radiance = vector1.angle(vector2)
  const degrees = vector1.angle(vector2, { degrees: true })

  // round so that testing is reliable
  const roundedRadiance = +radiance.toFixed(3)
  const roundedDegrees = +degrees.toFixed(3)

  assert(roundedRadiance === 0.869)
  assert(roundedDegrees === 49.797)
}
