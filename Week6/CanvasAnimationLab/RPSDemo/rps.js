//canvas stuff
var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

ctx.font = "40px Arial"
ctx.fillStyle = "purple"
ctx.strokeStyle = "yellow"
ctx.fillText("Welcome to Rock, Paper, Scissors Game!", 200, 280)
ctx.strokeText("Welcome to Rock, Paper, Scissors Game!", 200, 280)


//alert("Cheese alert")
//Array datatype
//var rps = ["rock", "paper", "scissors"]
//var rps = new Array()
var rps = []
rps[0] = "Rock!"
rps[1] = "Paper!"
rps[2] = "Scissors!"



document.getElementById("rock").addEventListener("click", function (e) {
    alert("You clicked " + rps[0])
    playGame(rps[0])
})
document.getElementById("paper").addEventListener("click", function (e) {
    alert("You clicked " + rps[1])
    playGame(rps[1])
})
document.getElementById("scissors").addEventListener("click", function (e) {
    alert("You clicked " + rps[2])
    playGame(rps[2])
})

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99)
    console.log(cpuChoice, playerChoice)

    switch (playerChoice) {
        case "Rock!":
            if (cpuChoice == 0) {
                //it's a tie
                alert("CPU chose Rock. It's a tie!")
            }
            else if (cpuChoice == 1) {
                alert("CPU chose Paper. CPU wins!")
            }
            else {
                alert("CPU chose Scissors. You win!")
            }
            break;
        case "Paper!":
            if (cpuChoice == 0) {
                alert("CPU chose Rock. You win!")
            }
            else if (cpuChoice == 1) {
                alert("CPU chose Paper. It's a tie!")
            }
            else {
                alert("CPU chose Scissors. CPU wins!")
            }
            break;
            case "Scissors!":
            if (cpuChoice == 0) {
                //it's a tie
                alert("CPU chose Rock. CPU wins!")
            }
            else if (cpuChoice == 1) {
                alert("CPU chose Paper. You win!")
            }
            else {
                alert("CPU chose Scissors. It's a tie!")
            }
            break;
    }
    

}
