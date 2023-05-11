//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var enemy;
var projectile;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	enemy = new GameObject({x:canvas.width/2, y:canvas.height/2-100});
		
	//goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	//var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w)
	{
		player.vy = -5
	}

	if(a)
	{
		player.vx = -5
	}
	if(d)
	{
		player.vx = 5
	}
	if(s)
	{
		player.vy = 5
	}

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
	//Top Boundary for Player
	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2
		player.vy = 0
	}

	//Bottom Boundary for Player
	else if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
		player.vy = 0
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	//Player/Enemy Collision
	while(player.hitTestPoint(enemy.bottom()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(player.hitTestPoint(enemy.left()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(player.hitTestPoint(enemy.right()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(player.hitTestPoint(enemy.top()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
	}

	//Projectile/Enemy Collision
	if(player.hitTestPoint(enemy))
	{
		player.x = 10000
	}


	//Show hit points
	player.drawRect();

	enemy.drawRect()
}

