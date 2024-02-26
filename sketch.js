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
  for(x = 1; x < BREITE; x += GROESSE)
    {
      for(y = 1; y < HOEHE; y += GROESSE)
        {
          if(random([0,1]))
            line(x, y, x + GROESSE, y + GROESSE);     // Zeichne einen \
          else
            line(x + GROESSE, y, x, y + GROESSE);     // Zeichne einen /
        }
    }
  noLoop();
}

function windowResized() {        // wenn die Browserfenstergröße verändert wurde, neu zeichnen
  BREITE = windowWidth;
  HOEHE = windowHeight; 
  resizeCanvas(windowWidth, windowHeight);
  loop();
}

function mouseClicked() {         // Bei Mausklick neu zeichnen
  loop();
}

function keyPressed() {           // per f in Fullscreen schalten
	if ( key === 'f' ) { 
		let fs = fullscreen();
		fullscreen(!fs);
	}
}