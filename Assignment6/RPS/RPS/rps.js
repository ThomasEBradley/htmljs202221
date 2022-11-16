var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    //alert(rps[pChoice] + " " + rps[cChoice])
ctx.clearRect(0, 0, canvas.width, canvas.height)


ctx.font = "40px Arial"
ctx.fillStyle = "purple"
ctx.strokeStyle = "yellow"
ctx.fillText(rps[pChoice] + " " + rps[cChoice], 200, 220)



    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                ctx.fillText("You tied!", 200, 260)
            }
            else if(cChoice === 1)
            {
                //display a loss
                ctx.fillText("You lost!", 200, 260)
            }
            else
            {
                //display a win
                ctx.fillText("You won!", 200, 260)
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillText("You tied!", 200, 260)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillText("You lost!", 200, 260)
                }
                else
                {
                    //display a win
                    ctx.fillText("You won!", 200, 260)
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillText("You tied!", 200, 260)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillText("You lost!", 200, 260)
                }
                else
                {
                    //display a win
                    ctx.fillText("You won!", 200, 260)
                }
             break;
    }
}
