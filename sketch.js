let bubbles =[];


function setup() {
  createCanvas(600, 400);

 // for(let i =0;i<10;i++){
 //   let x = random(width);
 //   let y = random(height);
  //  let r = random(10,40);
   // bubbles[i] = new Bubble(x, y, r);
  //}
  
}

function draw() {
  background(0);
 
  for(let i =0;i<bubbles.length;i++){
  bubbles[i].show();
  bubbles[i].move();
  }
  
  //bubbles[0].show();
 // bubbles[0].move();
  
 // bubbles[1].show();
 // bubbles[1].move();
}

function mousePressed(){
  let i =0;
  r = random(10,40);
  let b =new Bubble(mouseX,mouseY,r);
  //push adds new element into array
  bubbles.push(b)
  b++;
  i++;
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }
  
  move(){
    let mov1 = 10;
    let mov2= 10;

    if(this.x>width){
      mov1 = mov1 * -1;
      bubbles.splice(0,1);
    }
    
    this.x = this.x+mov1;

  
  }
  
  show() {
      stroke(255);
  strokeWeight(4);
  fill(random(255),random(255),random(255));
  ellipse(this.x, this.y, this.r * 2);
  }
}