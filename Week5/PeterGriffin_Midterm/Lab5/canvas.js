//This is a comment in JavaScript (Line Comment)
/*
Multiline JavaScript Comment
*/
//Defines variable to access the canvas properies
var canvas = document.getElementById("canvas");
//Defines the drawing context of the canvas
var ctx = canvas.getContext("2d");

//Draw a rectangle

//Defines the fill color
ctx.fillStyle = "rgb(0,0,255)";
//Define the outline color
ctx.strokeStyle = "green";
//Defines line width
ctx.lineWidth = "5";

//Finally draw the rectangle fillRect(x,y,width,height)
ctx.fillRect(30,30,200,100);
ctx.strokeRect(300,30,200,100);

//Draw a Line
ctx.beginPath()
ctx.moveTo(50,0);
ctx.lineTo(400,300);
ctx.lineTo(800,0);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(800,600);
ctx.lineTo(400,350);
ctx.lineTo(0,600);
ctx.stroke();

//Draw a Circle
ctx.fillStyle = "#55ddef"
ctx.strokeStyle = "yellow"
ctx.lineWidth = "2"

ctx.beginPath()
ctx.arc(400,300,50, 0, (3 * Math.PI)/2, false)
ctx.closePath()
ctx.fill()
ctx.stroke()

//Draw a shape

ctx.beginPath()
ctx.moveTo(650,100)
ctx.lineTo(700,140)
ctx.lineTo(675,200)
ctx.lineTo(625,200)
ctx.lineTo(600,140)
ctx.closePath()
ctx.stroke()
ctx.fill()

//Draw an image to canvas
//Create instance of image
var mario = new Image()
mario.src = "images/mario.png"

mario.onload = function(){
    ctx.drawImage(mario, 600, 300, 400, 200)
}


