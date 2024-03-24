//TODO: Vector class
class Vector {

    constructor(x, y, z) {
      this.x = x || 0
      this.y = y || 0
      this.z = z || 0
    }

    //ADD, SUB, CROSS
}



const createVector = (x, y, z) => {
  return new Vector(x, y, z)
}



//other
function random(min, max) {
  return Math.random() * (max - min) + min
}

const circle = (x, y, color) => {
  context.strokeStyle = color
  context.beginPath()
  context.arc(x, y, 5, 0, 2 * Math.PI, true)
  context.closePath()
  context.stroke()
}

const cross = (a, b) => {

   if( a && b instanceof Object) {
      let x = (a.y * b.z) - (a.z * b.y)
      let y = (a.z * b.x) - (a.x * b.z)
      let z = (a.x * b.y) - (a.y * b.x)

      let c = {
        x: Math.abs(x),
        y: Math.abs(y), 
        z: z
      }

      return c
  }

  if (a && b instanceof Array) {
    //TODO
  }
}

