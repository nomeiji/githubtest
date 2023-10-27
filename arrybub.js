let bubbles = [];


function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
  let x = random(width);
  let y = random(height);

  let r = random(10, 50);
  let b = new Bubble(x, y, r);
  
  bubbles.push(b);
  }
}

//function mouseDragged() {
 // let r = random(10, 50);
//  let b = new Bubble(mouseX, mouseY, r);
// bubbles.push(b);
//}
function mousePressed(){
    for(let i = 0; i < bubbles.length;i++){
    bubbles[i].clicked(mouseX,mouseY);
    }
  }


function draw() {
  background(0);
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(tempX, tempY, tempR,tempB) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.brightness = tempB;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }

  clicked(px,py){
    let d = dist(px,py,this.x,this.y);
    if(d<this.r){
      this.brightness = 125;
        print("clicked on bubble");
    }
    else{
      this.brightness = 0;
    }
   
  }
}
