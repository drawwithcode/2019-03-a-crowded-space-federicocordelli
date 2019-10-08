//instances

var Lines = [];
var amountOfLines = 58;
colorMode(RGB,255);


function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);



for(var i = 0; i < amountOfLines; i++){
  //create instance

  var tempX = random()*windowWidth;
  var tempY = random()*windowHeight;
  var tempSize = random()*50+10;
  var tempRect = new Rect(tempX, tempY, tempSize);

  Lines.push(tempRect);
}
  // put setup code here
}

function draw() {
   background(20);


  for (var i = 0; i < Lines.length; i++) {
    var tempRect = Lines[i];


    tempRect.display();
  }
  // put drawing code here
}

function Rect (_x, _y, _w, _h){
  //inner properties
  this.size = _w, _h;
  this.x = 0;
  this.y = _y;
  this.speed = 2;
  this.color = ("tomato");

//display method
  this.display = function() {
    fill(this.color);
    push();
    translate(this.x,this.y);
    noStroke();
    rect(0,0,mouseX*2,mouseY*0.2, 1, 50, 50, 1);

    pop();
  }



}
