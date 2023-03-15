/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src="images/Bradley_MenuButton1.png"
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/Bradley_MainMenu.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			sounds.play('bg', 0, true)
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		//startButton.color = `yellow`
		startButton.img.src="images/Bradley_MenuButton2.png"
	}
	else
	{
		//Default Button Graphic
		startButton.img.src="images/Bradley_MenuButton1.png"
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage()
}
	
	
