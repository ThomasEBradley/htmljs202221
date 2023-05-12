//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var enemy;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	enemy = new GameObject({x:canvas.width/2, y:canvas.height/2-100});
		
	//goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	
	//Stores the bullets
var bullets = [];
//Used to select a bullet to fire
var currentBullet = 0;
//The timer for each bullet
var fireCounter = 30;
var fireRate = 5;
//How far the bullet can go
var range = canvas.width/2;
//The amount of bullets to create
var bulletAmount = 25;
//Modifies the direction of the bullet when fired
var dir = {x:1,y:0};

for(var b = 0; b < bulletAmount; b++)
{
	bullets[b] = new GameObject({force:10, width:5, height:5});
	bullets[b].x = player.x;
	bullets[b].y = -1000;
}	

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
		if(!a && !d){dir.x = 0;}
		dir.y = -1;
	}

	if(a)
	{
		player.vx = -5
		dir.x = -1;
		if(!w && !s){dir.y = 0;}
	}
	if(d)
	{
		player.vx = 5
		dir.x = 1;
		if(!w && !s){dir.y = 0;}
	}
	if(s)
	{
		player.vy = 5
		if(!a && !d){dir.x = 0;}
		dir.y = 1;
	}

	//----------------Firing Logic---------------------
	//bullet timer
	fireCounter--;

	if(space)
	{
		if(fireCounter <= 0)
		{
			//place the bullet at the player's position minus the bullet's world
			bullets[currentBullet].x = player.x - bullets[currentBullet].world.x;
			bullets[currentBullet].y = player.y - bullets[currentBullet].world.y;
			//set the velocity using the dir modifier
			bullets[currentBullet].vx = dir.x * bullets[currentBullet].force;
			bullets[currentBullet].vy = dir.y * bullets[currentBullet].force;
			//reset the fireCounter
			fireCounter = fireRate;
			//increment the currentBullet index so that you can use the next bullet
			currentBullet++;
			//reset the currentBullet index when you exceed the bulletAmount
			if(currentBullet >= bulletAmount)
			{
				currentBullet = 0;
			}
		}
	}
	else
	{
		//Allow the player to fire when space is pressed.
		fireCounter = 0;
	}

	//------------Move bullets and check for collision-------------------
	for(var b = 0; b < bullets.length; b++)
	{
		//-----------------Limits the range------------------
		
		var dx = bullets[b].x + bullets[b].world.x - player.x;
		var dy = bullets[b].y + bullets[b].world.y - player.y;
		var dist = Math.sqrt(dx * dx + dy * dy);
		if(dist >= range)
		{
			bullets[b].vx = 0;
			bullets[b].y = -1000;
		}
		
		bullets[b].move();
		bullets[b].drawRect();
	
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

