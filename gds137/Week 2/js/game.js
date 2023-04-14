//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player2;
var ball;
var p1Wins = 0;
var p2Wins = 0;

//Ric Flair for some reason
var img=document.getElementById("ric");

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	//Instantiate the Players
	player = new GameObject();
	player2 = new GameObject();

	player.x = -5
	player2.x = 1029
	player.width = 25
	player2.width = 25

	ball = new GameObject();

	ball.vx = -4;
	ball.vy = 0;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);
	
	
	//Move the Players up and down
	if(w)
	{
		player.y += -5;
	}
	if(s)
	{
		player.y += 5;
	}
	if(upArrow)
	{
		player2.y += -5;
	}
	if(downArrow)
	{
		player2.y += 5;
	}

	//Top Boundary for Players
	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2
		player.vy = -player.vy;	
	}
	if(player2.y < 0 + player.height/2)
	{
		player2.y = 0 + player.height/2
		player2.vy = -player.vy;	
	}

	//Bottom Boundary for Players
	else if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
		player.vy = -player.vy;
	}
	else if(player2.y > canvas.height - player2.height/2)
	{
		player2.y = canvas.height - player2.height/2
		player2.vy = -player2.vy;
	}

		//Move the Ball
		ball.x += ball.vx;
		ball.y += ball.vy;
	
		//Right Boundary for Ball
		if(ball.x > canvas.width)
		{
			//ball.x = canvas.width - ball.width/2
			//ball.vx = -ball.vx;
			ball.x = canvas.width/2
			ball.y = canvas.height/2
			p1Wins = p1Wins + 1	
		}
		
		//Left Boundary for Ball
		else if(ball.x < 0)
		{
			ball.x = canvas.width/2
			ball.y = canvas.height/2
			p2Wins = p2Wins + 1
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

	if(ball.hitTestObject(player2))
	{
		//change color
		player2.color = "yellow";
		ball.vx = -ball.vx;
		ball.x = player2.x - player2.width/2 - ball.width/2;
		//Advanced Collision
		if (ball.y < player2.y - player2.height/6) {
			ball.vy = -4
		}
		else if(ball.y > player2.y + player2.height/6) {
			ball.vy = 4
		}
	}
	else
	{
		player2.color = "#00ff00";
	}

	//Line at the center of the screen
	context.save();
	context.strokeStyle = "yellow";
	context.beginPath();
	context.moveTo(canvas.width/2, 0)
	context.lineTo(canvas.width/2, canvas.height)
	context.closePath();
	context.lineWidth = 20;
	context.stroke();
	context.restore();

	//Player score text
		context.font = "20px Georgia";
		context.fillText("Player 1 | Player 2", canvas.width/2 - 77.5, 50)
		context.fillText(p1Wins, canvas.width/2 - 30, 80)
		context.fillText("-", canvas.width/2 - 4, 80)
		context.fillText(p2Wins, canvas.width/2 + 18, 80)

	//Draw Ric Flair image
	context.drawImage(img, ball.x - ball.width/2, ball.y - ball.height/2, ball.width, ball.height);

	
	
	//Update the Screen
	player.drawRect();
	player2.drawRect();
	//ball.drawCircle();
}

