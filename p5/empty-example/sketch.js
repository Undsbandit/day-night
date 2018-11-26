var sunX = 250;
var sunY = 300;

var moonX = 250;
var moonY = 600;

var rectX = 50;
var rectY = 100;
function setup() {
	createCanvas(500,500);
	// background("#64b5f6");
		fill('#64b5f6')
	noStroke();
	rect(0, 0, width, height);


  // put setup code here
}



function draw() {
	// background("#64b5f6")
		fill("#239b56")
	rect(0,385,500,500);
	textSize(55,70,45,45);
	textFont("New times roman");
	textStyle(ITALIC);
		text("Day/Night", 20, 50);
	

  // put drawing code here
}

function mouseClicked(){
	
	fill('#64b5f6')
	noStroke();
	rect(0, 0, width, height);
	fill("#ffeb3b");
	ellipse(sunX, sunY,350,350);

	if(sunY >600) {
		fill("#01579b")

		rect(0, 0, width, height);
		fill('#cfd8dc');				
		ellipse(moonX, moonY,350,350);
		moonY = moonY - 70;

		if (moonY < 200) {
			moonY = 200;
		}



	}
	sunY = sunY + 70;

	function keyPressed(){
		
	}
}