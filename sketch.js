// V0.3

let BREITE = 400;
let HOEHE = 400;
const GROESSE = 15;

function setup() {
  BREITE = windowWidth;
  HOEHE = windowHeight;
  createCanvas(BREITE, HOEHE);
  
  strokeWeight(2);
  stroke(200);
}

function draw() {
  background(220);
  for(a = 1; a < BREITE; a+=GROESSE)
    {
      for(b = 1; b < HOEHE; b+=GROESSE)
        {
          if(random([0,1]))
            line(a, b, GROESSE+a, GROESSE+b);
          else
            line(GROESSE+a, b, a, GROESSE+b);
        }
    }
  noLoop();
}

function windowResized() {

  BREITE = windowWidth;
  HOEHE = windowHeight; 

  background(220);
  resizeCanvas(windowWidth, windowHeight);
  loop();
}

function mouseClicked() {
  loop();
}

function keyPressed() {
	console.log("got: key " + key + " keyCode " + keyCode);
	if ( key === 'f' ) {  // f === 70
		let fs = fullscreen();
		fullscreen(!fs);
	}
}