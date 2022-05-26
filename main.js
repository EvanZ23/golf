var canvas = new fabric.Canvas('Golf');
// Create canvas variable

ball_y=0;
 ball_x=0;
 hole_y=400;
 hole_x=800;

 var hole_object= "";
 var ball_object= "";


hole_image_width = 50;
hole_image_height = 50;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(IMG){
        hole_object=IMG;
        hole_object.scaleToWidth(hole_image_width);
        hole_object.scaleToHeight(hole_image_height);
        hole_object.set({
            
            top:hole_y,left:hole_x
            
        });
        canvas.add("hole_object");
    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(IMG){
        ball_object=IMG;
        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
            
            top:ball_y,left:ball_x
            
        });
        canvas.add("ball_object");
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
if((ball_x == hole_x)&&((ball_y == hole_y))){
	canvas.remove(ball_object);
}	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y > 0){
			ball_y = ball_y - 5;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <= 450){
			ball_y = ball_y + 5;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
				ball_x = ball_x - 5;
				canvas.remove(ball_object);
				new_image();
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + 5;
				canvas.remove(ball_object);
				new_image();
		}
	}
	
}

