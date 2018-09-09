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

{
  const vector = new Vector([-0.221, 7.437])

  const res = vector.magnitude()
  console.log(res)
}

{
  const vector = new Vector([8.813, -1.331, -6.247])

  const res = vector.magnitude()
  console.log(res)
}

{
  const vector = new Vector([5.581, -2.136])

  const res = vector.normalize()
  console.log(res)
}

{
  const vector = new Vector([1.996, 3.108, -4.554])

  const res = vector.normalize()
  console.log(res)
}

{
  const vector1 = new Vector([7.887, 4.138])
  const vector2 = new Vector([-8.802, 6.776])

  const res = vector1.dotProduct(vector2)
  console.log(res)
}

{
  const vector1 = new Vector([-5.955, -4.904, -1.874])
  const vector2 = new Vector([-4.496, -8.755, 7.103])

  const res = vector1.dotProduct(vector2)
  console.log(res)
}

{
  const vector1 = new Vector([3.183, -7.627])
  const vector2 = new Vector([-2.668, 5.319])

  const res = vector1.angle(vector2)
  console.log(res)
}

{
  const vector1 = new Vector([7.35, 0.221, 5.188])
  const vector2 = new Vector([2.751, 8.259, 3.985])

  const res = vector1.angle(vector2, { degrees: true })
  console.log(res)
}
