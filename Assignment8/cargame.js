var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var start = 58
var finish = 956

//car variables
var carPos = 2
var startFuel = randomNumber(canvas.width, 600)
var fuel = startFuel
var fuelBarWidth = 512
var speed = 3
var gameOver = true

//start timer variables
var seconds = 3
var fps = 60
var frames = fps

//add the event handler for starting the game
document.addEventListener("keydown", pressSpace)

//add key handler function
function pressSpace(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false
    }

    if( fuel<= 0){
        restartGame()
    }
}


function main(){
    //clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)

    if(gameOver){
        //Main Menu Screen
        ctx.save()
        ctx.fillStyle = "black"
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to start", canvas.width/2, canvas.height/2,)
        ctx.restore()
    }else{
        if(!gameOver && seconds > 0){
            runStartTimer()
            drawStartTimer()
        }else{
                if(fuel>0){
            //update the car's position
        carPos += speed
        fuel -= speed
        }
        }


        drawStartFinishLines()

    drawCar()

    

    drawFuelBar()

    if(fuel<=0 || carPos + 40 > finish){
        drawResults()
    }
    }
    
    //refresh the main function
    timer = requestAnimationFrame(main)

}

function drawStartFinishLines(){
    //draw start line
    ctx.fillStyle = "black"
    ctx.fillRect(start, 50, 10, 500)
    //draw finish line
    ctx.fillRect(finish, 50, 10, 500)
}

function drawCar(){
    //draw car
    ctx.fillStyle = "red"
    ctx.fillRect(carPos,canvas.height/2,40,20)
}

function drawFuelBar(){
    var currentBarWidth = fuelBarWidth * (fuel/startFuel)
    ctx.fillStyle = "red"
    ctx.fillRect(start,30, fuelBarWidth, 10)
    ctx.fillStyle = "black"
    ctx.font = "25px Arial"
    ctx.fillText("Fuel", start, 25)
    if(fuel>0){
        ctx.fillStyle = "lime"
    ctx.fillRect(start,30, currentBarWidth, 10)
    }
    
}

function drawResults(){
    if(carPos + 40 > finish){
        ctx.save()
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.textAlign = "center"
        ctx.fillText("You made it to the finish line... You win!", canvas.width/2, canvas.height/2)
        ctx.fillText("Press Space to restart", canvas.width/2, canvas.height/2 + 50)
        ctx.restore()
    }else{
        ctx.save()
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel... You lose!", canvas.width/2, canvas.height/2)
        ctx.fillText("Press Space to restart", canvas.width/2, canvas.height/2 + 50)
        ctx.restore()
    }
}

//utility function
function randomNumber(high,low){
    return Math.round(Math.random() * (high-low)+ low)
}

function restartGame(){
    location.reload()
}

function runStartTimer(){
    frames -= 1
    if(frames < 0){
        frames = fps
        seconds -= 1
    }
}

function drawStartTimer(){
    if(Math.ceil(seconds) > 0){
        
    }else{

    }
    ctx.save()
    ctx.fillStyle = "black"
    ctx.font = "30px Arial"
    ctx.textAlign = "center"
    ctx.fillText(seconds, canvas.width/2, canvas.height/2)
    ctx.restore()
}