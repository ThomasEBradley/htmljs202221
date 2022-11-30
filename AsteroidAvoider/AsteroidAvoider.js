var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var time = requestAnimationFrame(main)

//variables for asteroid creation
var numAsteroids = 20
var Asteroids = []

//class for asteroid
function Asteroid(){
    this.radius = randomRange(15,2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vy = randomRange(10,5)
    this.color = "white"

    this.drawAsteroid = function(){
        //commands to draw asteroids
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2,  true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()

    }

}

//for loop to create the first asteroids
for(var i = 0; i<numAsteroids; i++){
    Asteroids[i] = new Asteroid()
}

function main(){
    //clears canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)

    for(var i = 0; i < Asteroids.length; i++){

        if(Asteroids[i].y > canvas.height + Asteroids[i].radius){
            Asteroids[i].x = randomRange(canvas.width - Asteroids[i].radius, Asteroids[i].radius)
            Asteroids[i].y = randomRange(canvas.height - Asteroids[i].radius, Asteroids[i].radius) - canvas.height
        }

        //draw the asteroids
        Asteroids[i].y += Asteroids[i].vy
        Asteroids[i].drawAsteroid()

    }
    timer = requestAnimationFrame(main)

}

//utility functions

function randomRange(high,low){
    return Math.random() * (high-low) + low
}