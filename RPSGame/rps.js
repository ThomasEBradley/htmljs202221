//canvas stuff
var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

//create instances for images RPS
var rockpaperscissors = new Image()
var rock = new Image()
var paper = new Image()
var scissors = new Image()
var hrock = new Image()
var hpaper = new Image()
var hscissors = new Image()


//image variables
rockpaperscissors.src = "images/rockpaperscissors.jpg"
rock.src = "images/rock.jpg"
paper.src = "images/paper.jpg"
scissors.src = "images/scissors.jpg"
hrock.src = "images/rock2.jpg"
hpaper.src = "images/paper2.jpg"
hscissors.src = "images/scissors2.jpg"

//result and counter variables
var result = "Select a button from above to choose."

var winCount = 0
var tieCount = 0
var lossCount = 0

rockpaperscissors.onload = function () {
    draw(rock, paper, scissors, rock, paper, scissors)
}

//start menu function
document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

var gameOver = true

function keyPressDown(e) {
    console.log(e.keyCode)
}

function keyPressUp(e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {
        gameOver = false
        draw(rock, paper, scissors, rock, paper, scissors)
    }
}

function draw(rock, paper, scissors, crock, cpaper, cscissors) {
    if (gameOver == true) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(rockpaperscissors, 0, 0, 1000, 600)
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillStyle = "black"
        ctx.fillText("Press Space to play", canvas.width / 2, 100)
        return
    }

    //main game state
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial"
    ctx.textAlign = "center"
    ctx.fillStyle = "black"
    ctx.fillText("Player Choices", canvas.width / 2, 100)
    ctx.drawImage(rock, canvas.width / 2 - rock.width / 2 - 100, 150)
    ctx.drawImage(paper, canvas.width / 2 - paper.width / 2, 150)
    ctx.drawImage(scissors, canvas.width / 2 - scissors.width / 2 + 100, 150)

    ctx.fillText("CPU Choices", canvas.width / 2, 325)
    ctx.drawImage(crock, canvas.width / 2 - rock.width / 2 - 100, 375)
    ctx.drawImage(cpaper, canvas.width / 2 - paper.width / 2, 375)
    ctx.drawImage(cscissors, canvas.width / 2 - scissors.width / 2 + 100, 375)

    ctx.fillText(result, canvas.width / 2, 525)
    drawScore(); 
    //game over mechanic
        if(lossCount == 5){
            location.reload();
        }
}

var rps = []
rps[0] = "Rock!"
rps[1] = "Paper!"
rps[2] = "Scissors!"



document.getElementById("rock").addEventListener("click", function (e) {
    playGame(rps[0])
})
document.getElementById("paper").addEventListener("click", function (e) {
    playGame(rps[1])
})
document.getElementById("scissors").addEventListener("click", function (e) {
    playGame(rps[2])
})

function playGame(playerChoice) {
    if (gameOver == true) {
        return
    }
    var cpuChoice = Math.floor(Math.random() * 2.99)
    console.log(cpuChoice, playerChoice)

    //results of cpu choice
    switch (playerChoice) {
        case "Rock!":
            if (cpuChoice == 0) {
                result = "CPU chose Rock. It's a tie!"  
                tieCount += 1
                draw(hrock, paper, scissors, hrock, paper, scissors)
            }
            else if (cpuChoice == 1) {
                result = "CPU chose Paper. CPU wins!"
                lossCount += 1
                draw(hrock, paper, scissors, rock, hpaper, scissors)
            }
            else {
                result = "CPU chose Scissors. You win!"
                winCount += 1
                draw(hrock, paper, scissors, rock, paper, hscissors)
            }
            break;
        case "Paper!":
            if (cpuChoice == 0) {
                result = "CPU chose Rock. You win!"
                winCount += 1
                draw(rock, hpaper, scissors, hrock, paper, scissors)
            }
            else if (cpuChoice == 1) {
                result = "CPU chose Paper. It's a tie!"
                tieCount += 1
                draw(rock, hpaper, scissors, rock, hpaper, scissors)
            }
            else {
                result = "CPU chose Scissors. CPU wins!"
                lossCount += 1
                draw(rock, hpaper, scissors, rock, paper, hscissors)
            }
            break;
        case "Scissors!":
            if (cpuChoice == 0) {
                result = "CPU chose Rock. CPU wins!"
                lossCount += 1
                draw(rock, paper, hscissors, hrock, paper, scissors)
            }
            else if (cpuChoice == 1) {
                result = "CPU chose Paper. You win!"
                winCount += 1
                draw(rock, paper, hscissors, rock, hpaper, scissors)
            }
            else {
                result = "CPU chose Scissors. It's a tie!"
                tieCount += 1
                draw(rock, paper, hscissors, rock, paper, hscissors)
            }
            break;
    }
}

//draw result counter
function drawScore() {
    ctx.font = "20px Arial"
    ctx.textAlign = "right"
    ctx.fillStyle = "black"
    ctx.fillText("Wins: " + winCount.toString(), canvas.width/2 + 300, 30)
    ctx.fillText("Ties: " + tieCount.toString(), canvas.width/2 + 300, 50)
    ctx.fillText("Losses: " + lossCount.toString(), canvas.width/2 + 300, 70)
}


