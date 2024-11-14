let rims = [];
let selected = 0;
let p;
let n = 8;
let input = "";
let stepSize = 30;
let gridGraphics;
let grid = true;

function setup() {
	let myCanvas = createCanvas(window.innerWidth, window.innerHeight).parent("sketch-wrapper");
  gridGraphics = createGraphics(window.innerWidth, window.innerHeight);
  preRenderGrid();

  myCanvas.parent("testDiv");
	// rim = new Rim([1,2,4,7],8,createVector(0,0),50,50);
  // p = createP("");
  // p.style("font-family", "Consolas");
  // p.position(width/2,height/2);
	// for (let i = 0; i < 8; i++) {
	// 	rims.push(
	// 		new Rim(
	// 			[
	// 				floor(random(1, 9)),
	// 				floor(random(1, 9)),
	// 				floor(random(1, 9)),
	// 				floor(random(1, 9)),
	// 			],
	// 			8,
	// 			createVector(
	// 				50*floor(random(-width / 2, width / 2)/50),
	// 				50*floor(random(-height / 2, height / 2)/50)
	// 			),
	// 			50,
	// 			50
	// 		)
	// 	);
	// }
}

function draw() {
	background(220);
  if(grid){
    image(gridGraphics,0,0);
  }
  
	translate(width / 2, height / 2);
  stroke(0);
  fill(0);
  
  push();
	stroke(0);
	fill(0);
	strokeWeight(4);
	// rim.show();
	for (let rim of rims) {
		strokeWeight(4);
    stroke(0,0,0,128);
    fill(0,0,0,128);
		if (rims.indexOf(rim) == selected) {
			strokeWeight(8);
      fill(255,0,0,128);
      stroke(255,0,0,128);
		}
		rim.show();
	}

  pop();
  textAlign(CENTER,CENTER);
  textSize(64);
  textFont("Courier New");
  textStyle(BOLD)
  text(input,0,0);
  textAlign(RIGHT,TOP)
  text(`n=${n}`,width/2,-height/2);



}

function keyPressed(e) {

  if(keyIsDown(78)){
    n=parseInt(key);
    return;
  }
  
  if( keyCode === ENTER){
    rims.push(new Rim(input.split('').map(Number),n,createVector(-width/2+15,-height/2+15),stepSize,stepSize));
    selected = rims.length-1;
    input = "";
    // p.html("");
    return;
  }

  if(48 <= keyCode && keyCode <= 57){
    input = input + key;
    // p.html(input);
  }
  
	if (keyCode === LEFT_ARROW) {
		for (let rim of rims) {
      if(rims.indexOf(rim) == selected){
			  rim.sv.x -= 2*rim.w;
      }
		}
	}
	if (keyCode === RIGHT_ARROW) {
		for (let rim of rims) {
      if(rims.indexOf(rim) == selected){
			  rim.sv.x += 2*rim.w;
      }
    }
	}
	if (keyCode === UP_ARROW) {
    e.preventDefault();
		for (let rim of rims) {
			if(rims.indexOf(rim) == selected){
			  rim.sv.y -= 2*rim.h;
      }
		}
	}
	if (keyCode === DOWN_ARROW) {
    e.preventDefault();
		for (let rim of rims) {
			if(rims.indexOf(rim) == selected){
			  rim.sv.y += 2*rim.h;
      }
		}
	}

	if (key == "c") {
		for (let rim of rims) {
      if(rims.indexOf(rim) == selected){
        rim.cycle(1);
      }
		}
	}

	if (key == "x") {
		for (let rim of rims) {
      if(rims.indexOf(rim) == selected){
			rim.cycle(-1);
      }
		}
	}

  if(keyCode == TAB){
    e.preventDefault();
    if(keyIsDown(16)){
      selected = (selected-1 + rims.length) % rims.length;
    } else {
      selected = (selected+1 + rims.length) % rims.length;
    }
    
  }

  if(key == 'z'){
    selected--;
    rims.pop();
  }

  if(key == '-'){
    gridGraphics = createGraphics(window.innerWidth, window.innerHeight);
    stepSize -= 5;
    for(let rim of rims){
      rim.h -=5;
      rim.w -=5;
    }
    preRenderGrid();
  }

  if(key == '='){
    gridGraphics = createGraphics(window.innerWidth, window.innerHeight);
    stepSize += 5;
    for(let rim of rims){
      rim.h += 5;
      rim.w += 5;
      // rim.sv.x += 5;
    }
    preRenderGrid();
  }

  if(key == "f"){
    rims[selected].flip();
  }

  if(key == "d"){
    rims.push(rims[selected].clone());
    selected++;
  }

  if(key == "g"){
    grid = !grid;
  }

  if(key == "l"){
    for(let rim of rims){
      rim.showLabelFlag = !rim.showLabelFlag;
    }
  }

  if(keyCode == BACKSPACE){
    input = input.slice(0,-1);
  }
}



function preRenderGrid(){
  gridGraphics.push();
  gridGraphics.fill(150);
  gridGraphics.stroke(150);

  let numCols = width/stepSize;
  let numRows = height/stepSize;

  for(let i = 0; i < numCols; i++){
    for(let j = 0; j < numRows; j++){
      if((j % 2) == 0){
        gridGraphics.circle(i*2*stepSize+15,j*stepSize+15,10);
      } else {
        gridGraphics.circle(i*2*stepSize + stepSize + 15,j*stepSize+15,10);
      }
      
    }
  }
  gridGraphics.pop();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  gridGraphics = createGraphics(window.innerWidth, window.innerHeight);
  preRenderGrid();
}










