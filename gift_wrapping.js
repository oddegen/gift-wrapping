//setup
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const dpi = window.devicePixelRatio

canvas.width = 500 * dpi
canvas.height = 500 * dpi
canvas.style.width = 500 + 'px'
canvas.style.height = 500 + 'px'
context.scale(dpi, dpi)
context.lineWidth = 2




//params
const points = []
const hull = []

let leftMost
let currentVertex
let index
let nextVertex
let animate;



const update = () => {
    draw()

    window.requestAnimationFrame(update)
}



for (let i = 0; i < 50; i++) {
    points.push(createVector(random(5, canvas.width - 5), random(5, canvas.height - 5)))    
}

points.sort((a, b) => a.x - b.x)
leftMost = points[0]
currentVertex = leftMost
hull.push(currentVertex)
nextVertex = points[1]
index = 2


//TODO: change to oop
let value = true

function stop() {
    value = false
}


const draw = () => {
 
    if (value) {
        context.clearRect(0, 0, 500, 500)


        for (let p of points) {
            circle(p.x, p.y)
        }

        context.strokeStyle = 'red'
        context.beginPath()
        for (const p of hull) {
            context.lineTo(p.x, p.y)
            context.stroke()
        }
        context.closePath()


        
        context.strokeStyle = 'black'        
        context.beginPath()
        context.moveTo(currentVertex.x, currentVertex.y);
        context.lineTo(nextVertex.x, nextVertex.y);
        context.closePath()
        context.stroke()
        

        let checking = points[index]

        if(!(nextVertex == leftMost)) {
            context.strokeStyle = 'green'
            context.beginPath() 
            context.moveTo(currentVertex.x, currentVertex.y);
            context.lineTo(checking.x, checking.y);
            context.closePath()
            context.stroke()
            context.strokeStyle = 'black'
        } else {
            context.strokeStyle = 'red'
            context.beginPath()
            context.moveTo(currentVertex.x, currentVertex.y);
            context.lineTo(leftMost.x, leftMost.y);
            context.stroke()
            context.closePath()
            context.strokeStyle = 'black'
        }

        const a = {
            x: nextVertex.x - currentVertex.x,
            y: nextVertex.y - currentVertex.y,
            z: nextVertex.z - currentVertex.z
        }

        const b = {
            x: checking.x - currentVertex.x,
            y: checking.y - currentVertex.y,
            z: checking.z - currentVertex.z
        }

        const c = cross(a, b)

        if (c.z < 0) {
            nextVertex = checking
        }

        index += 1

        if (index == points.length) {
            if (nextVertex == leftMost) {
                stop()
            } else {
                hull.push(nextVertex);
                currentVertex = nextVertex;
                index = 0;
                nextVertex = leftMost;
            }
        }
           
    }

    
}



update()