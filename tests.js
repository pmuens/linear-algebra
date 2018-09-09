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
