//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new Player();
	player.vx = 2;
	player.vy = 4;
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	player.x += player.vx;
	player.y += player.vy;

	//Right Boundary
	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
		player.vx = -player.vx;	
		player.width -= 5;
		player.height -= 5;
	}
	
	//Left Boundary
	else if(player.x < 0 + player.width/2)
	{
		player.x = 0 + player.width/2
		player.vx = -player.vx;	
		player.width -= 5;
		player.height -= 5;
	}

	//Top Boundary
	else if(player.y < 0 + player.width/2)
	{
		player.y = 0 + player.width/2
		player.vy = -player.vy;	
		player.width += 5;
		player.height += 5;
	}

	//Bottom Boundary
	else if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
		player.vy = -player.vy;
		player.width += 5;
		player.height += 5;
	}

	//Update the Screen
	player.draw();
}
