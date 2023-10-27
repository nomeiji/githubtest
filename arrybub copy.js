//let bubbles = [];
let bubble;

function setup() {
  createCanvas(600, 400);
  let x = random(width);
  let y = random(height);

  let r = random(10, 50);
  let b = new Bubble(x, y, r);
  bubble = new Bubble(x,y,r);
  //bubbles.push(b);
}

//function mouseDragged() {
 // let r = random(10, 50);
//  let b = new Bubble(mouseX, mouseY, r);
// bubbles.push(b);
//}
function mousePressed(){
    bubble.clicked();
  }


function draw() {
  background(0);
  bubble.move();
  bubble.show();
  //for (let i = 0; i < bubbles.length; i++) {
   // bubbles[i].move();
   // bubbles[i].show();
  //}
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
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

  clicked(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d<this.r){
        print("clicked on bubble");
    }
   
  }
}
