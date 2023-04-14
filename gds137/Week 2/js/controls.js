//Define Booleans for each key
var a = false;
var d = false;
var w = false;
var s = false;
var leftArrow = false;
var rightArrow = false;
var upArrow = false;
var downArrow = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 37)
	{
		leftArrow = true;
	}
	if(e.keyCode == 38)
	{
		upArrow = true;
	}
	if(e.keyCode == 40)
	{
		downArrow = true;
	}
	if(e.keyCode == 39)
	{
		rightArrow = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 37)
	{
		leftArrow = false;
	}
	if(e.keyCode == 38)
	{
		upArrow = false;
	}
	if(e.keyCode == 40)
	{
		downArrow = false;
	}
	if(e.keyCode == 39)
	{
		rightArrow = false;
	}
}
