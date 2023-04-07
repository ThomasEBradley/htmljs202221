//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();

	player.x = -5
	player.width = 25

	ball = new GameObject();

	ball.vx = -4;
	ball.vy = 0;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player up and down
	if(w)
	{
		player.y += -5;
	}
	if(s)
	{
		player.y += 5;
	}

	//Top Boundary for Player
	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2
		player.vy = -player.vy;	
	}

	//Bottom Boundary for Player
	else if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
		player.vy = -player.vy;
	}

		//Move the Ball
		ball.x += ball.vx;
		ball.y += ball.vy;
	
		//Right Boundary for Ball
		if(ball.x > canvas.width - ball.width/2)
		{
			ball.x = canvas.width - ball.width/2
			ball.vx = -ball.vx;	
		}
		
		//Left Boundary for Ball
		else if(ball.x < 0)
		{
			ball.x = canvas.width/2
			ball.y = canvas.height/2
		}
	
		//Top Boundary for Ball
		else if(ball.y < 0 + ball.width/2)
		{
			ball.y = 0 + ball.width/2
			ball.vy = -ball.vy;	
		}
	
		//Bottom Boundary for Ball
		else if(ball.y > canvas.height - ball.height/2)
		{
			ball.y = canvas.height - ball.height/2
			ball.vy = -ball.vy;
		}

		//Collision
		if(ball.hitTestObject(player))
	{
		//change color
		player.color = "yellow";
		ball.vx = -ball.vx;
		ball.x = player.x + player.width/2 + ball.width/2;
		//Advanced Collision
		if (ball.y < player.y - player.height/6) {
			ball.vy = -4
		}
		else if(ball.y > player.y + player.height/6) {
			ball.vy = 4
		}
	}
	else
	{
		player.color = "#00ff00";
	}
	
	
	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}

