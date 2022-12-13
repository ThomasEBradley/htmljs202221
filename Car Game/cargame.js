var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var start = 58
var finish = 956

//background image variables
var background1 = new Image()
var background2 = new Image()
background1.src = "images/cargamebackground1.jpg"
background2.src = "images/cargamebackground2.webp"


//car variables
var carPos = 2
var startFuel = randomNumber(canvas.width - 70, 600)
var fuel = startFuel
var fuelBarWidth = 512
var speed = 3
var gameOver = true

//car sprite
var carSprite = new Image()
carSprite.src = "images/carsprite.png"
carSprite.onload = function () {
    main()
}

//start timer variables
var seconds = 3
var fps = 60
var frames = fps

//add the event handler for starting the game
document.addEventListener("keydown", pressSpace)

//add key handler function
function pressSpace(e) {
    if (e.keyCode == 32 && gameOver) {
        gameOver = false
    }

    if (fuel <= 0) {
        restartGame()
    }
}


function main() {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (gameOver) {
        //Main Menu Screen
        ctx.save()
        ctx.drawImage(background1, 0, 0, canvas.width, canvas.height)
        //gmae title
        ctx.fillStyle = "black"
        ctx.strokeStyle = "red"
        ctx.lineWidth = "5"
        ctx.fillRect(300, 45, 400, 70)
        ctx.strokeRect(300, 45, 400, 70)
        ctx.fillStyle = "red"
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Thomas Bradley | Car Game", 500, 90,)
        //press space prompt
        ctx.fillStyle = "black"
        ctx.strokeStyle = "red"
        ctx.lineWidth = "5"
        ctx.fillRect(363, 350, 300, 50)
        ctx.strokeRect(363, 350, 300, 50)
        ctx.fillStyle = "red"
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to start", canvas.width / 2, canvas.height / 2,)
        ctx.restore()
    } else {
        drawBackground2()
        if (!gameOver && seconds > 0) {
            runStartTimer()
            drawStartTimer()
        } else {
            if (fuel > 0) {
                //update the car's position
                carPos += speed
                fuel -= speed
            }
        }        

        drawStartFinishLines()

        drawCar()

        drawFuelBar()

        if (fuel <= 0 || carPos + 40 > finish) {
            drawResults()
        }
    }

    //refresh the main function
    timer = requestAnimationFrame(main)

}

function drawBackground2(){
    ctx.drawImage(background2, 0, 0, canvas.width, canvas.height)
}

function drawStartFinishLines() {
    //draw start line
    ctx.fillStyle = "red"
    ctx.fillRect(start, 130, 10, 500)
    //draw finish line
    ctx.fillRect(finish, 130, 10, 500)
}

function drawCar() {
    //draw car
    ctx.drawImage(carSprite, carPos, canvas.height / 2 - 47, 80, 110)
}

function drawFuelBar() {
    var currentBarWidth = fuelBarWidth * (fuel / startFuel)
    ctx.fillStyle = "red"
    ctx.fillRect(start, 50, fuelBarWidth, 10)
    ctx.fillStyle = "red"
    ctx.font = "25px Arial"
    ctx.fillText("Fuel", start, 25)
    if (fuel > 0) {
        ctx.fillStyle = "lime"
        ctx.fillRect(start, 50, currentBarWidth, 10)
    }

}

function drawResults() {
    if (carPos + 40 > finish) {
        ctx.save()
        ctx.fillStyle = "black"
        ctx.strokeStyle = "red"
        ctx.lineWidth = "5"
        ctx.fillRect(290, 625, 450, 100)
        ctx.strokeRect(290, 625, 450, 100)
        ctx.fillStyle = "red"
        ctx.font = "25px Arial"
        ctx.textAlign = "center"
        ctx.fillText("You made it to the finish line... You win!", canvas.width / 2 + 3, canvas.height / 2 + 275)
        ctx.fillText("Press Space to restart", canvas.width / 2, canvas.height / 2 + 325)
        ctx.restore()
    } else {
        ctx.save()
        ctx.fillStyle = "black"
        ctx.strokeStyle = "red"
        ctx.lineWidth = "5"
        ctx.fillRect(290, 625, 450, 100)
        ctx.strokeRect(290, 625, 450, 100)
        ctx.fillStyle = "red"
        ctx.font = "25px Arial"
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel... You lose!", canvas.width / 2, canvas.height / 2 + 275)
        ctx.fillText("Press Space to restart", canvas.width / 2, canvas.height / 2 + 325)
        ctx.restore()
    }
}

//utility function
function randomNumber(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}

function restartGame() {
    location.reload()
}

function runStartTimer() {
    frames -= 1
    if (frames < 0) {
        frames = fps
        seconds -= 1
    }
}

function drawStartTimer() {
    if (Math.ceil(seconds) > 0) {

    } else {

    }
    ctx.save()
    ctx.fillStyle = "red"
    ctx.font = "30px Arial"
    ctx.textAlign = "center"
    ctx.fillText(seconds, canvas.width / 2, canvas.height / 2 - 50)
    ctx.restore()
}