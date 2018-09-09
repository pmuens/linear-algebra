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
