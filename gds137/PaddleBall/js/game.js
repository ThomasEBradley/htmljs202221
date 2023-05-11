//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var gravity = 1;
var frictionX = .97;	
var frictionY = .97;
var ax = 1;
var player;
var ball;
var score = 0;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	//Instantiate the Players
	player = new GameObject();
	player.force = 1
	player.x = canvas.width/2
	player.y = canvas.height - 50
	player.width = 250
	player.height = 40

	ball = new GameObject();

	ball.vx = 5;
	ball.vy = 0;
	ball.color = "#ff00ff"
	ball.radius = 40
	ball.force = 5

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);
	
	
	//Move the Player left and right
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	
	player.vx *= frictionX;
	player.x += player.vx;
	

	//Left Boundary for Player
	if(player.x < 0 + player.width/2)
	{
		player.x = 0 + player.width/2
		player.vx = 0
	}

	//Right Boundary for Player
	else if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
		player.vx = 0
	}

		//Move the Ball
		ball.vx *= frictionX;
		ball.vy *= frictionY;
		ball.vy += gravity
		ball.x += ball.vx;
		ball.y += ball.vy;
	
		//Right Boundary for Ball
		if(ball.x > canvas.width - ball.width/2)
		{
			//ball.x = canvas.width - ball.width/2
			//ball.vx = -ball.vx;
			ball.x = canvas.width - ball.width/2
			ball.vx = -35 * .67
		}
		
		//Left Boundary for Ball
		else if(ball.x < 0 + ball.width/2)
		{
			ball.x = 0 + ball.width/2
			ball.vx = 35 * .67
		}
	
		//Top Boundary for Ball
		else if(ball.y < 0 + ball.height/2)
		{
			ball.y = 0 + ball.width/2
			ball.vy = 35 * .67;	
		}
	
		//Bottom Boundary for Ball
		else if(ball.y > canvas.height - ball.height/2)
		{
			ball.y = canvas.height - ball.height/2
			ball.vy = -35 * .67;
			score = 0
		}

		//Collision
		if(ball.hitTestObject(player))
	{
		//change color
		player.color = "yellow";
		ball.vy = -35;
		ball.y = player.y - player.height/2 - ball.height/2;
		score += 1
		//Advanced Collision
		if (ball.x < player.x - player.width/6) {
			ball.vx = -ball.force
		}
		if(ball.x < player.x - player.width/3) {
			ball.vx = -ball.force * 5
		}
		if(ball.x > player.x + player.width/6) {
			ball.vx = ball.force
		}
		if(ball.x > player.x + player.width/3) {
			ball.vx = ball.force * 5
		}
	}
	else
	{
		player.color = "#00ffff";
	}

	//Line at the center of the screen
	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(player.x, player.y)
	context.lineTo(ball.x, ball.y)
	context.closePath();
	context.lineWidth = 3;
	context.stroke();
	context.restore();

	//Player score text
		context.font = "bold 16px Arial";
		context.fillColor = "#555555"
		context.fillText("Score: ", 80, 25)
		context.fillText(score, 135, 25)

	//Draw Ric Flair image
	//context.drawImage(img, ball.x - ball.width/2, ball.y - ball.height/2, ball.width, ball.height);

	
	
	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}
