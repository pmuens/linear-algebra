const Vector = require('./vector')

// Lesson 2: 1. Vectors

{
  const vector1 = new Vector([8.218, -9.341])
  const vector2 = new Vector([-1.129, 2.111])

  const res = vector1.add(vector2)
  console.log(res)
}

{
  const vector1 = new Vector([7.119, 8.215])
  const vector2 = new Vector([-8.223, 0.878])

  const res = vector1.subtract(vector2)
  console.log(res)
}

{
  const vector = new Vector([1.671, -1.012, -0.318])
  const scalar = 7.41

  const res = vector.multiply(scalar)
  console.log(res)
}
