// Danny Schreiter 2024 // www.d9s.de
// V1.0

let total_width, total_height;
const SIZE = 15;

function setup() {
  total_width = windowWidth;
  total_height = windowHeight;
  createCanvas(total_width, total_height);
  strokeWeight(2);
  stroke(100);                    // color of the lines
}

function draw() {
  background(220);
  for(x = 1; x < total_width; x += SIZE)
    {
      for(y = 1; y < total_height; y += SIZE)
        {
          if(random([0,1]))
            line(x, y, x + SIZE, y + SIZE);     // draw a \
          else
            line(x + SIZE, y, x, y + SIZE);     // draw a /
        }
    }
  noLoop();                       // wait until mouse action or resize
}

function windowResized() { 
  total_width = windowWidth;
  total_height = windowHeight; 
  resizeCanvas(windowWidth, windowHeight);
  loop();
}

function mouseClicked() {         // redraw on mouse click
  loop();
}

function keyPressed() {           // use 'f' key to toggle full screen mode
	if ( key === 'f' ) { 
		let fs = fullscreen();
		fullscreen(!fs);
	}
}