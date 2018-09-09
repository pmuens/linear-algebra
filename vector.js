class Vector {
  // main functionalities
  constructor(coordinates) {
    this.coordinates = coordinates
  }

  print() {
    const message = `Vector: ${this.coordinates}`
    console.log(message)
    return message
  }

  equals(vector) {
    return this.coordinates.toString() === vector.coordinates.toString()
  }

  // operations
  add(vector) {
    const result = this.coordinates.map((coordinate, index) => {
      return coordinate + (vector.coordinates[index] || 0)
    })
    return new Vector(result)
  }

  subtract(vector) {
    const result = this.coordinates.map((coordinate, index) => {
      return coordinate - (vector.coordinates[index] || 0)
    })
    return new Vector(result)
  }

  multiply(scalar) {
    const result = this.coordinates.map(coordinate => coordinate * scalar)
    return new Vector(result)
  }
}

module.exports = Vector
