const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
canvas.width = 700
canvas.height = 700
requestAnimationFrame(tick)

let angle = 0
function tick(timestamp){
    requestAnimationFrame(tick)

    angle += Math.PI * 0.01

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath()
    context.arc(
        canvas.width / 2 + 150 * Math.cos(angle),
        canvas.height / 2 + 150 * Math.sin(angle),
        10,
        0,
        Math.PI * 2
    )
    context.fillStyle = 'green'
    context.fill()
}