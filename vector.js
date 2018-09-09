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
}

module.exports = Vector
