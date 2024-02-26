// V0.4

let BREITE, HOEHE;
const GROESSE = 15;

function setup() {
  BREITE = windowWidth;
  HOEHE = windowHeight;
  createCanvas(BREITE, HOEHE);
  
  strokeWeight(2);
  stroke(100);                    // Strichfarbe
}

function draw() {
  background(220);
  for(a = 1; a < BREITE; a+=GROESSE)
    {
      for(b = 1; b < HOEHE; b+=GROESSE)
        {
          if(random([0,1]))
            line(a, b, GROESSE+a, GROESSE+b);     // Zeichne einen \
          else
            line(GROESSE+a, b, a, GROESSE+b);     // Zeichne einen /
        }
    }
  noLoop();
}

function windowResized() {        // wenn die Browserfenstergröße verändert wurde

  BREITE = windowWidth;
  HOEHE = windowHeight; 

  resizeCanvas(windowWidth, windowHeight);
  loop();
}

function mouseClicked() {         // Bei Mausklick neu zeichnen
  loop();
}

function keyPressed() {           // per f in Fullscreen shalten
	if ( key === 'f' ) { 
		let fs = fullscreen();
		fullscreen(!fs);
	}
}