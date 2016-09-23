//  Reference:  HTML5 Canvas Graphing Calculator by Curran Kelleher
var canvas = document.getElementById('myCanvas');
var c=canvas.getContext('2d'),

/* 'n' is the number  of discrete points used to approximate
   the   continuous   math  curve   defined   by  the   math
   expression. */

  n=100,
  xMin=-10,
  xMax=10,
  yMin = -10,
  yMax = 10,
  math = mathjs(), 
  expr='sin(x+t)*x';
  scope = {
    x: 0, t:0};
var tree=math.parse(expr,scope);
var time = 0,   timeIncrement = 0.1;
var text;



drawCurve();
startAnimation();



function run(){
expr =document.getElementById("inputField").value;
console.log(expr);
tree=math.parse(expr,scope);
drawCurve();
}

function startAnimation(){
    (function animloop(){
      requestAnimationFrame(animloop);
      render();
    }());
  }

function render(){
       time += timeIncrement;
       drawCurve();
  }



function drawCurve(){
  var i, xPixel, yPixel, percentX, percentY,
    mathX, mathY;
    
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  for(i=0;i<n;i++){
    percentX=i/(n-1);
    mathX=percentX*(xMax-xMin)+xMin;
    mathY = evaluateMathExpr(mathX);
    percentY = (mathY - yMin)/(yMax - yMin);
    // Flip Y to match canvas coordinates.
    percentY = 1 - percentY;
    xPixel=percentX*canvas.width;
    yPixel=percentY*canvas.height;
        c.lineTo(xPixel, yPixel);
  } 
  c.stroke();
}


function evaluateMathExpr(mathX){
scope.x=mathX;
scope.t = time;
return tree.eval();
}














