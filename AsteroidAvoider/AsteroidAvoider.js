var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var timer = requestAnimationFrame(main)
var gameOver = true
var gameState = []
var currentState = 0

//score variables
var score = 0
var highScore = 0

//ship variables
var ship = new PlayerShip()

function PlayerShip() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.width = 20
    this.height = 20
    this.up = false
    this.left = false
    this.down = false
    this.right = false
    this.vx = 0
    this.vy = 0

    this.drawShip = function () {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

    this.moveShip = function () {
        this.x += this.vx
        this.y += this.vy

        //add boundaries to canvas
        //bottom boundary
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2
            this.vy = 0
            gameOver = true
        }

        //top boundary
        if (this.y < this.height / 2) {
            this.y = this.height / 2
            this.vy = 0
        }

        //right boundary
        if (this.x > canvas.width - this.width / 2) {
            this.x = canvas.width - this.width / 2
            this.vx = 0
        }

        //left boundary
        if (this.x < this.width / 2) {
            this.x = this.width / 2
            this.vx = 0
        }
    }

}

document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e) {
    if (!gameOver) {

        //WASD keys
        if (e.keyCode == 87) {
            //ship goes up
            ship.up = true
        }
        if (e.keyCode == 65) {
            //ship goes left
            ship.left = true
        }
        if (e.keyCode == 83) {
            //ship goes down
            ship.down = true
        }
        if (e.keyCode == 68) {
            //ship goes right
            ship.right = true
        }

        //arrow keys
        if (e.keyCode == 38) {
            //ship goes up
            ship.up = true
        } if (e.keyCode == 37) {
            //ship goes left
            ship.left = true
        } if (e.keyCode == 40) {
            //ship goes down
            ship.down = true
        } if (e.keyCode == 39) {
            //ship goes right
            ship.right = true
        }
    }
    if(gameOver){
        if(e.keyCode == 32)
        gameOver = false
        currentState = 1
        scoreTimer()
        main()
    }

}

function pressKeyUp(e) {
    if (!gameOver) {

        //WASD keys
        if (e.keyCode == 87) {
            //ship goes up
            ship.up = false
        }
        if (e.keyCode == 65) {
            //ship goes left
            ship.left = false
        }
        if (e.keyCode == 83) {
            //ship goes down
            ship.down = false
        }
        if (e.keyCode == 68) {
            //ship goes right
            ship.right = false
        }

        //arrow keys
        if (e.keyCode == 38) {
            //ship goes up
            ship.up = false
        } if (e.keyCode == 37) {
            //ship goes left
            ship.left = false
        } if (e.keyCode == 40) {
            //ship goes down
            ship.down = false
        } if (e.keyCode == 39) {
            //ship goes right
            ship.right = false
        }
    }

}

//variables for asteroid creation
var numAsteroids = 20
var Asteroids = []

//class for asteroid
function Asteroid() {
    this.radius = randomRange(15, 2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vy = randomRange(10, 5)
    this.color = "white"

    this.drawAsteroid = function () {
        //commands to draw asteroids
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()

    }

}

//for loop to create the first asteroids
for (var i = 0; i < numAsteroids; i++) {
    Asteroids[i] = new Asteroid()
}


//utility functions

function randomRange(high, low) {
    return Math.random() * (high - low) + low
}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance
}

function scoreTimer(){
    if(!gameOver){
        score++

        if(score % 10 == 0){
            numAsteroids += 10
            console.log(numAsteroids)
        }
        setTimeout(scoreTimer, 1000)
    }
}



//state machine

gameState[0] = function(){
    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2 - 30)
    ctx.font = "15px Arial"
    ctx.fillText("Press Space to start", canvas.width/2, canvas.height/2 + 20)
    ctx.restore()
}

//game scene
gameState[1] = function(){
    //draw score to canvas
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //setup vertical movement
    if (ship.up) {
        ship.vy = -10
    } else {
        ship.vy = 3
    }

    //setup horizontal movement
    if (ship.left) {
        ship.vx = -5
    } else if (ship.right) {
        ship.vx = 5
    } else {
        ship.vx = 0
    }

    for (var i = 0; i < Asteroids.length; i++) {
        var dX = ship.x - Asteroids[i].x
        var dY = ship.y - Asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, (ship.height / 2 + Asteroids[i].radius))) {
            gameOver = true
        }

        if (Asteroids[i].y > canvas.height + Asteroids[i].radius) {
            Asteroids[i].x = randomRange(canvas.width - Asteroids[i].radius, Asteroids[i].radius)
            Asteroids[i].y = randomRange(canvas.height - Asteroids[i].radius, Asteroids[i].radius) - canvas.height
        }

        //draw the asteroids
        Asteroids[i].y += Asteroids[i].vy
        Asteroids[i].drawAsteroid()

    }

    //draw ship
    ship.moveShip()
    ship.drawShip()

    //check if we need to add more asteroids
    while(Asteroids.length < numAsteroids){
        //add and create new astroids in the array
        Asteroids.push(new Asteroid())
    }
}

//main game loop
function main(){
    //clears canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    gameState[currentState]

    if (!gameOver) {
        timer = requestAnimationFrame(main)
    }

    //check if we need to add more asteroids
    while(Asteroids.length < numAsteroids){
        //add and create new astroids in the array
        Asteroids.push(new Asteroid())
    }
}