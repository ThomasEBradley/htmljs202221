//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	ball = new Player();
	ball.vx = 2;
	ball.vy = 4;
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	ball.x += ball.vx;
	ball.y += ball.vy;

	//Right Boundary
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;	
		ball.width -= 5;
		ball.height -= 5;
	}
	
	//Left Boundary
	else if(ball.x < 0 + ball.width/2)
	{
		ball.x = 0 + ball.width/2
		ball.vx = -ball.vx;	
		ball.width -= 5;
		ball.height -= 5;
	}

	//Top Boundary
	else if(ball.y < 0 + ball.width/2)
	{
		ball.y = 0 + ball.width/2
		ball.vy = -ball.vy;	
		ball.width += 5;
		ball.height += 5;
	}

	//Bottom Boundary
	else if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;
		ball.width += 5;
		ball.height += 5;
	}

	//Update the Screen
	ball.draw();
}
